import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  magnetic?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-glow-blue hover:shadow-glow-purple hover:brightness-110',
  secondary:
    'glass-strong text-white hover:bg-white/10 hover:border-white/20',
  ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
  outline:
    'border border-white/15 text-white hover:border-accent-blue/50 hover:bg-accent-blue/5',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm gap-1.5',
  md: 'h-11 px-6 text-sm gap-2',
  lg: 'h-12 px-8 text-base gap-2.5',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      magnetic = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-semibold',
          'transition-all duration-200 cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
          'disabled:opacity-50 disabled:pointer-events-none',
          magnetic && 'hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]',
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export { Button, type ButtonProps }
