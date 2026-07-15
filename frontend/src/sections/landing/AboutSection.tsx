import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { fadeInUp, viewportOnce } from '@/lib/motion'

export function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <SectionHeader
            badge="About"
            title="Built for modern video workflows"
            description="VideoVerse is a free AI-powered platform that transforms long-form video into structured, searchable knowledge — helping creators, teams, and professionals save hours every week."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3"
        >
          {[
            { value: '100%', label: 'Free to use' },
            { value: '2', label: 'Languages supported' },
            { value: 'AI', label: 'Powered by Whisper & RAG' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center transition-all duration-300 hover:border-white/15 hover:shadow-glow"
            >
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
