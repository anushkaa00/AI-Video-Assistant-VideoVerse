import { type ReactNode } from 'react'
import { FileText, Sparkles, Clock, CheckSquare, List } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Skeleton } from '@/components/ui/Skeleton'

interface ResultBlockProps {
  icon: ReactNode
  title: string
  content?: string
  loading?: boolean
}

function ResultBlock({ icon, title, content, loading }: ResultBlockProps) {
  return (
    <GlassCard className="h-full" glow padding="lg">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/15 to-accent-purple/15 border border-white/10">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="mt-5">
        {loading ? (
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ) : (
          <div className="whitespace-pre-wrap text-sm leading-relaxed text-slate-300">
            {content || 'No content available.'}
          </div>
        )}
      </div>
    </GlassCard>
  )
}

interface ResultsContentProps {
  transcript?: string
  summary?: string
  highlights?: string
  timestamps?: string
  actionItems?: string
  loading?: boolean
}

export function ResultsContent({
  transcript,
  summary,
  highlights,
  timestamps,
  actionItems,
  loading = false,
}: ResultsContentProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <ResultBlock
        icon={<FileText className="h-5 w-5 text-accent-blue" aria-hidden="true" />}
        title="AI Transcript"
        content={transcript}
        loading={loading}
      />
      <ResultBlock
        icon={<Sparkles className="h-5 w-5 text-accent-purple" aria-hidden="true" />}
        title="AI Summary"
        content={summary}
        loading={loading}
      />
      <ResultBlock
        icon={<List className="h-5 w-5 text-accent-blue" aria-hidden="true" />}
        title="Key Highlights"
        content={highlights}
        loading={loading}
      />
      <ResultBlock
        icon={<Clock className="h-5 w-5 text-accent-purple" aria-hidden="true" />}
        title="Important Timestamps"
        content={timestamps}
        loading={loading}
      />
      <div className="lg:col-span-2">
        <ResultBlock
          icon={<CheckSquare className="h-5 w-5 text-accent-blue" aria-hidden="true" />}
          title="Action Items"
          content={actionItems}
          loading={loading}
        />
      </div>
    </div>
  )
}
