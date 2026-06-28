import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  FolderOpen,
  Clock,
  BarChart3,
  Trash2,
  ExternalLink,
  MessageSquare,
} from 'lucide-react'
import { PageLayout } from '@/components/layout/PageLayout'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { analysisService } from '@/services/analysisService'
import { useToast } from '@/context/ToastContext'
import {
  getStoredAnalysisIds,
  removeStoredAnalysisId,
  setActiveAnalysisId,
} from '@/lib/session'
import type { AnalysisSummary } from '@/types'
import { cn } from '@/lib/utils'

export default function DashboardPage() {
  const [analyses, setAnalyses] = useState<AnalysisSummary[]>([])
  const [loading, setLoading] = useState(true)
  const { showToast } = useToast()
  const navigate = useNavigate()

  const loadAnalyses = async () => {
    setLoading(true)
    try {
      const ids = getStoredAnalysisIds()
      if (ids.length === 0) {
        setAnalyses([])
        return
      }
      const data = await analysisService.listAnalyses(ids)
      setAnalyses(data)
    } catch (error) {
      showToast(
        error instanceof Error ? error.message : 'Failed to load analyses.',
        'error',
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadAnalyses()
  }, [])

  const handleDelete = async (id: string) => {
    try {
      await analysisService.deleteAnalysis(id)
      removeStoredAnalysisId(id)
      setAnalyses((prev) => prev.filter((item) => item.id !== id))
      showToast('Analysis removed from session.', 'success')
    } catch (error) {
      showToast(
        error instanceof Error ? error.message : 'Failed to delete analysis.',
        'error',
      )
    }
  }

  const stats = [
    { icon: FolderOpen, label: 'Projects', value: String(analyses.length) },
    {
      icon: Clock,
      label: 'Recent Videos',
      value: String(analyses.filter((item) => item.status === 'completed').length),
    },
    { icon: BarChart3, label: 'Analyses', value: String(analyses.length) },
  ]

  return (
    <PageLayout
      title="Dashboard"
      description="Manage your video projects, track analyses, and access your AI tools."
    >
      <div className="grid gap-5 sm:grid-cols-3">
        {stats.map(({ icon: Icon, label, value }) => (
          <GlassCard key={label} hover glow>
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/15 to-accent-purple/15 border border-white/10">
                <Icon className="h-5 w-5 text-accent-blue" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm text-slate-400">{label}</p>
                <p className="text-2xl font-bold text-white">{value}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-white">Recent Analyses</h2>
        <p className="mt-1 text-sm text-slate-400">
          Session history — analyses are stored in memory for this session only.
        </p>

        {loading ? (
          <GlassCard className="mt-5 py-16 text-center" glow>
            <p className="text-slate-400">Loading analyses...</p>
          </GlassCard>
        ) : analyses.length === 0 ? (
          <GlassCard className="mt-5 flex flex-col items-center justify-center py-20 text-center" glow>
            <LayoutDashboard
              className="h-12 w-12 text-accent-blue/50"
              aria-hidden="true"
            />
            <p className="mt-4 text-lg font-medium text-white">No analyses yet</p>
            <p className="mt-2 max-w-md text-sm text-slate-400">
              Analyze a video from the home page to see your projects and insights
              appear here.
            </p>
            <Button
              variant="primary"
              size="md"
              magnetic
              className="mt-6"
              onClick={() => navigate('/#analyze')}
            >
              Analyze Video
            </Button>
          </GlassCard>
        ) : (
          <div className="mt-5 space-y-4">
            {analyses.map((analysis) => (
              <GlassCard key={analysis.id} hover className="p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="truncate text-base font-semibold text-white">
                        {analysis.title}
                      </h3>
                      <span
                        className={cn(
                          'rounded-full px-2.5 py-0.5 text-xs font-medium',
                          analysis.status === 'completed' &&
                            'bg-green-500/10 text-green-300 border border-green-500/20',
                          analysis.status === 'processing' &&
                            'bg-yellow-500/10 text-yellow-300 border border-yellow-500/20',
                          analysis.status === 'failed' &&
                            'bg-red-500/10 text-red-300 border border-red-500/20',
                        )}
                      >
                        {analysis.status}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-sm text-slate-500">
                      {analysis.source_label}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      {new Date(analysis.created_at).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        setActiveAnalysisId(analysis.id)
                        navigate(`/results/${analysis.id}`)
                      }}
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Open
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setActiveAnalysisId(analysis.id)
                        navigate(`/chat?analysisId=${analysis.id}`)
                      }}
                    >
                      <MessageSquare className="h-4 w-4" aria-hidden="true" />
                      Chat
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(analysis.id)}
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                      Delete
                    </Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  )
}
