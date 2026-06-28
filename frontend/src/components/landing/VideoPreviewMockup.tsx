import { motion } from 'framer-motion'
import {
  Play,
  Pause,
  Volume2,
  Maximize2,
  MessageSquare,
  FileText,
  CheckSquare,
} from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'

export function VideoPreviewMockup() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-4xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-accent-blue/20 via-accent-glow/20 to-accent-purple/20 blur-2xl"
        aria-hidden="true"
      />

      <GlassCard className="relative overflow-hidden p-0 shadow-elevated gradient-border" glow>
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <span className="mx-auto text-xs text-slate-500">meeting-recording.mp4</span>
        </div>

        <div className="relative aspect-video bg-gradient-to-br from-charcoal to-surface">
          <div className="absolute inset-0 bg-mesh-gradient opacity-60" aria-hidden="true" />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              role="button"
              aria-label="Play video preview"
              tabIndex={0}
            >
              <Play className="h-7 w-7 fill-white text-white ml-1" aria-hidden="true" />
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="mb-2 h-1 w-full rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-purple"
                initial={{ width: '0%' }}
                animate={{ width: '35%' }}
                transition={{ duration: 2, delay: 1, ease: 'easeOut' }}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Pause className="h-4 w-4 text-white cursor-pointer" aria-hidden="true" />
                <span className="text-xs text-slate-400">04:32 / 12:45</span>
              </div>
              <div className="flex items-center gap-3">
                <Volume2 className="h-4 w-4 text-slate-400" aria-hidden="true" />
                <Maximize2 className="h-4 w-4 text-slate-400" aria-hidden="true" />
              </div>
            </div>
          </div>

          <motion.div
            className="absolute top-4 right-4 w-64 hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="glass-strong rounded-xl p-3 space-y-2">
              <div className="flex items-center gap-2 text-xs text-accent-blue">
                <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="font-medium">AI Summary</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Key decisions: Q3 roadmap approved, hiring 3 engineers, launch date set for August.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-16 left-4 w-48 hidden md:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="glass-strong rounded-xl p-3 space-y-2">
              <div className="flex items-center gap-2 text-xs text-accent-purple">
                <CheckSquare className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="font-medium">Action Items</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-400">
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-accent-blue" aria-hidden="true" />
                  Review budget proposal
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-accent-purple" aria-hidden="true" />
                  Schedule follow-up
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-white/5 border-t border-white/5">
          {[
            { icon: FileText, label: 'Transcript', value: '98% accuracy' },
            { icon: MessageSquare, label: 'Summary', value: 'Ready' },
            { icon: CheckSquare, label: 'Actions', value: '5 found' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 px-4 py-3">
              <Icon className="h-4 w-4 text-accent-glow shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs text-slate-500">{label}</p>
                <p className="text-sm font-medium text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  )
}
