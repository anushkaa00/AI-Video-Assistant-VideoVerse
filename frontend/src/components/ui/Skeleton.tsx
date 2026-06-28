import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn('rounded-lg bg-white/5 shimmer', className)}
      role="status"
      aria-label="Loading"
    />
  )
}

export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <motion.div
      className={cn('glass rounded-2xl p-6 space-y-4', className)}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-2/3" />
    </motion.div>
  )
}
