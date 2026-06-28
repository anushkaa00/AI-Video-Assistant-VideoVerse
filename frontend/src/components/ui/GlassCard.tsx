import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  glow?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const paddingMap = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      className,
      hover = false,
      glow = false,
      padding = 'md',
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'glass rounded-2xl',
          paddingMap[padding],
          glow && 'shadow-glow',
          hover &&
            'cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-glow-lg hover:border-white/15 hover:bg-glass-hover',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)

GlassCard.displayName = 'GlassCard'

export { GlassCard }
