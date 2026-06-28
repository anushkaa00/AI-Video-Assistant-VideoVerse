import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {badge && (
        <span className="mb-4 inline-flex items-center rounded-full bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-blue border border-accent-blue/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-400 leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  )
}
