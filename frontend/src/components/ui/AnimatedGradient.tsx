import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedGradientProps {
  className?: string
}

export function AnimatedGradient({ className }: AnimatedGradientProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <motion.div
        className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, #3b82f6 0deg, #8b5cf6 120deg, #6366f1 240deg, #3b82f6 360deg)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-surface"
        aria-hidden="true"
      />
    </div>
  )
}
