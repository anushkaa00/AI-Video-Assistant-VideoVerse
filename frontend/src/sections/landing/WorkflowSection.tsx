import { motion } from 'framer-motion'
import {
  Upload,
  Cpu,
  FileText,
  Sparkles,
  Highlighter,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/motion'

interface Step {
  step: string
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [
  {
    step: '01',
    icon: Upload,
    title: 'Upload Video',
    description: 'Drop a video file or paste a YouTube URL to get started.',
  },
  {
    step: '02',
    icon: Cpu,
    title: 'AI Processing',
    description: 'Our pipeline analyzes audio, speech, and content structure.',
  },
  {
    step: '03',
    icon: FileText,
    title: 'Generate Transcript',
    description: 'Whisper converts speech to a precise, searchable transcript.',
  },
  {
    step: '04',
    icon: Sparkles,
    title: 'Generate Summary',
    description: 'AI creates a concise summary of the entire video content.',
  },
  {
    step: '05',
    icon: Highlighter,
    title: 'Extract Highlights',
    description: 'Key moments, action items, and timestamps are identified.',
  },
  {
    step: '06',
    icon: MessageCircle,
    title: 'Chat with Video',
    description: 'Ask questions and explore your content through AI chat.',
  },
]

export function WorkflowSection() {
  return (
    <section id="workflow" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <SectionHeader
            badge="Workflow"
            title="From video to insights in minutes"
            description="A streamlined AI pipeline that transforms hours of footage into structured, searchable knowledge."
          />
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              variants={fadeInUp}
              className="group relative"
            >
              {index < steps.length - 1 && index % 3 !== 2 && (
                <div
                  className="absolute top-10 left-[calc(100%-8px)] hidden h-px w-[calc(100%-16px)] lg:block"
                  aria-hidden="true"
                >
                  <div className="h-full w-full bg-gradient-to-r from-accent-blue/30 via-accent-purple/20 to-transparent" />
                </div>
              )}

              <div className="relative flex h-full flex-col glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-glass-hover hover:shadow-glow cursor-default">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 text-xs font-bold text-accent-blue">
                    {item.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 transition-all duration-300 group-hover:border-accent-blue/25 group-hover:bg-accent-blue/5">
                    <item.icon
                      className="h-5 w-5 text-slate-400 transition-colors duration-300 group-hover:text-accent-blue"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
