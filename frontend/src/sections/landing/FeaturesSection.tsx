import { motion } from 'framer-motion'
import {
  Mic,
  Brain,
  MessageSquare,
  CheckSquare,
  Database,
  Download,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

const features: Feature[] = [
  {
    icon: Mic,
    title: 'Whisper Transcription',
    description:
      'Industry-leading speech-to-text with 98%+ accuracy. Supports long-form content and multiple formats.',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    icon: Brain,
    title: 'AI Summarization',
    description: 'Generate concise summaries and key highlights instantly.',
    className: 'md:col-span-1',
  },
  {
    icon: CheckSquare,
    title: 'Action Items',
    description: 'Automatically detect tasks, deadlines, and commitments.',
    className: 'md:col-span-1',
  },
  {
    icon: Database,
    title: 'RAG Search',
    description: 'Semantic search over your entire video library with ChromaDB.',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    icon: MessageSquare,
    title: 'Chat with Video',
    description:
      'Ask questions and get context-aware answers powered by Mistral AI.',
    className: 'md:col-span-2',
  },
  {
    icon: Download,
    title: 'Export Everything',
    description: 'Download transcripts, summaries, and action items in multiple formats.',
    className: 'md:col-span-1',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <SectionHeader
            badge="Features"
            title="Everything you need to understand video"
            description="From raw footage to structured insights — our AI pipeline handles the heavy lifting so you can focus on what matters."
          />
        </motion.div>

        <motion.div
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className={cn(feature.className)}
            >
              <GlassCard hover glow className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 border border-accent-blue/20">
                  <feature.icon
                    className="h-5 w-5 text-accent-blue"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
