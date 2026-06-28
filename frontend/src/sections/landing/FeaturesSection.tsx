import { motion } from 'framer-motion'
import {
  Mic,
  FileText,
  Sparkles,
  CheckSquare,
  Clock,
  MessageSquare,
  Search,
  Download,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/motion'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Mic,
    title: 'AI Transcription',
    description:
      'Convert speech to text with high accuracy using Whisper-powered transcription.',
  },
  {
    icon: FileText,
    title: 'AI Summary',
    description:
      'Generate concise, intelligent summaries from any video in seconds.',
  },
  {
    icon: Sparkles,
    title: 'Key Highlights',
    description:
      'Automatically extract the most important moments and talking points.',
  },
  {
    icon: CheckSquare,
    title: 'Action Items',
    description:
      'Detect tasks, deadlines, and commitments from your video content.',
  },
  {
    icon: Clock,
    title: 'Timestamp Detection',
    description:
      'Navigate directly to key moments with precise timestamp mapping.',
  },
  {
    icon: MessageSquare,
    title: 'Chat with Video',
    description:
      'Ask questions and get context-aware answers from your video content.',
  },
  {
    icon: Search,
    title: 'Semantic Search',
    description:
      'Search across transcripts and insights using intelligent vector retrieval.',
  },
  {
    icon: Download,
    title: 'Export Results',
    description:
      'Download transcripts, summaries, and action items in multiple formats.',
  },
]

function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <div className="group relative flex h-full flex-col glass rounded-2xl p-6 transition-all duration-300 cursor-default hover:-translate-y-1 hover:border-white/15 hover:bg-glass-hover hover:shadow-glow">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/15 to-accent-purple/15 border border-white/10 transition-all duration-300 group-hover:border-accent-blue/30 group-hover:shadow-glow-blue">
        <Icon
          className="h-5 w-5 text-accent-blue transition-colors duration-300 group-hover:text-accent-purple"
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
    </div>
  )
}

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
            description="From raw footage to structured insights — VideoVerse handles the heavy lifting so you can focus on what matters."
          />
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="h-full"
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
