import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, MessageSquare } from 'lucide-react'
import { PageLayout } from '@/components/layout/PageLayout'
import { Button } from '@/components/ui/Button'
import { ResultsContent } from '@/components/analysis/ResultsContent'
import { analysisService } from '@/services/analysisService'
import { useToast } from '@/context/ToastContext'
import {
  addStoredAnalysisId,
  setActiveAnalysisId,
} from '@/lib/session'
import type { AnalysisResult } from '@/types'

export default function ResultsPage() {
  const { analysisId } = useParams<{ analysisId: string }>()
  const navigate = useNavigate()
  const { showToast } = useToast()
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!analysisId) return

    const fetchResult = async () => {
      try {
        const data = await analysisService.getAnalysis(analysisId)
        setResult(data)
        addStoredAnalysisId(analysisId)
        setActiveAnalysisId(analysisId)
      } catch (error) {
        showToast(
          error instanceof Error ? error.message : 'Failed to load analysis.',
          'error',
        )
      } finally {
        setLoading(false)
      }
    }

    fetchResult()
  }, [analysisId, showToast])

  return (
    <PageLayout
      title={loading ? 'Loading results...' : result?.title || 'Analysis Results'}
      description={
        result?.source_label
          ? `Source: ${result.source_label}`
          : 'AI-generated insights from your video.'
      }
    >
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Button>
        {analysisId && (
          <Link to={`/chat?analysisId=${analysisId}`}>
            <Button variant="secondary" size="sm">
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              Chat with Video
            </Button>
          </Link>
        )}
      </div>

      <ResultsContent
        transcript={result?.transcript}
        summary={result?.summary}
        highlights={result?.highlights}
        timestamps={result?.timestamps}
        actionItems={result?.action_items}
        loading={loading}
      />
    </PageLayout>
  )
}
