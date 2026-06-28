import { motion } from 'framer-motion'
import {
  Upload,
  AudioLines,
  FileText,
  Sparkles,
  MessageCircle,
  Share2,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/motion'

const steps = [
  {
    step: '01',
    icon: Upload,
    title: 'Upload or Link',
    description: 'Drop a video file or paste a YouTube URL. We handle the rest.',
  },
  {
    step: '02',
    icon: AudioLines,
    title: 'AI Transcription',
    description: 'Whisper converts speech to text with industry-leading accuracy.',
  },
  {
    step: '03',
    icon: FileText,
    title: 'Smart Processing',
    description: 'AI generates summaries, highlights, and structured action items.',
  },
  {
    step: '04',
    icon: Sparkles,
    title: 'Vector Indexing',
    description: 'Content is embedded and stored in ChromaDB for semantic search.',
  },
  {
    step: '05',
    icon: MessageCircle,
    title: 'Chat & Explore',
    description: 'Ask questions and get instant, context-aware answers from your video.',
  },
  {
    step: '06',
    icon: Share2,
    title: 'Export & Share',
    description: 'Download insights or share with your team in your preferred format.',
  },
]

export function WorkflowSection() {
  return (
    <section id="workflow" className="relative py-24 sm:py-32">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-glow/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />

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
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
              {index < steps.length - 1 && (
                <div
                  className="absolute top-8 left-full hidden h-px w-6 bg-gradient-to-r from-accent-blue/40 to-transparent lg:block -translate-x-3"
                  aria-hidden="true"
                />
              )}

              <div className="glass rounded-2xl p-6 h-full transition-all duration-200 hover:border-white/15 hover:bg-glass-hover cursor-default">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-accent-blue/60">
                    {item.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-accent-blue/30 transition-colors duration-200">
                    <item.icon
                      className="h-5 w-5 text-slate-300 group-hover:text-accent-blue transition-colors duration-200"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
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
