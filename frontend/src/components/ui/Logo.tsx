import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

const sizes = {
  sm: { img: 'h-8 w-8', text: 'text-base' },
  md: { img: 'h-10 w-10', text: 'text-lg' },
  lg: { img: 'h-12 w-12', text: 'text-xl' },
}

export function Logo({ size = 'md', showText = true, className }: LogoProps) {
  const s = sizes[size]

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <img
        src="/logo.png"
        alt="VideoVerse logo"
        className={cn(s.img, 'object-contain shrink-0')}
      />
      {showText && (
        <span className={cn(s.text, 'font-bold text-white tracking-tight')}>
          VideoVerse
        </span>
      )}
    </span>
  )
}
