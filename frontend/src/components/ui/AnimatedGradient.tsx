import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedGradientProps {
  className?: string
  variant?: 'hero' | 'subtle'
}

export function AnimatedGradient({
  className,
  variant = 'hero',
}: AnimatedGradientProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className,
      )}
    >
      <motion.div
        className={cn(
          'absolute left-1/2 -translate-x-1/2 rounded-full blur-[120px]',
          variant === 'hero'
            ? '-top-1/3 h-[600px] w-[900px] opacity-[0.12]'
            : 'top-1/2 h-[400px] w-[600px] opacity-[0.06] -translate-y-1/2',
        )}
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.4) 0deg, rgba(139,92,246,0.3) 120deg, rgba(99,102,241,0.35) 240deg, rgba(59,130,246,0.4) 360deg)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-accent-purple/5 blur-[80px]"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 h-48 w-48 rounded-full bg-accent-blue/5 blur-[60px]"
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div
        className={cn(
          'absolute inset-0',
          variant === 'hero'
            ? 'bg-gradient-to-b from-[#030305]/60 via-transparent to-[#030305]'
            : 'bg-transparent',
        )}
      />
    </div>
  )
}
