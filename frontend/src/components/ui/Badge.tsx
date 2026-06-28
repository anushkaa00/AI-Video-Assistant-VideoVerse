import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'gradient' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide',
        variant === 'default' && 'glass text-slate-300',
        variant === 'gradient' &&
          'bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 text-accent-blue border border-accent-blue/20',
        variant === 'outline' && 'border border-white/15 text-slate-400',
        className,
      )}
    >
      {children}
    </span>
  )
}
