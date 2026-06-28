import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LoadingOverlayProps {
  message?: string
  className?: string
}

export function LoadingOverlay({
  message = 'Analyzing your video...',
  className,
}: LoadingOverlayProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-[90] flex items-center justify-center bg-[#030305]/80 backdrop-blur-sm',
        className,
      )}
    >
      <div className="glass-strong rounded-3xl px-8 py-10 text-center shadow-elevated gradient-border max-w-md mx-4">
        <Loader2
          className="mx-auto h-10 w-10 animate-spin text-accent-blue"
          aria-hidden="true"
        />
        <p className="mt-4 text-lg font-semibold text-white">{message}</p>
        <p className="mt-2 text-sm text-slate-400">
          Transcribing, summarizing, and extracting insights. This may take a few minutes.
        </p>
      </div>
    </div>
  )
}
