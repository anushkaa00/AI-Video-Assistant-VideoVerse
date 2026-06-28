import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/motion'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Content Creator',
    company: 'TechFlow Media',
    content:
      'VidAI cut my video editing research time by 80%. I can now find any moment in a 2-hour podcast in seconds.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Product Manager',
    company: 'ScaleUp Inc.',
    content:
      'Our team uses it for every meeting recording. Action items are extracted automatically — no more missed follow-ups.',
    rating: 5,
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Educator',
    company: 'Stanford Online',
    content:
      'Students can chat with lecture recordings and get instant answers. It has transformed how we deliver course content.',
    rating: 5,
  },
  {
    name: 'Alex Kim',
    role: 'Journalist',
    company: 'Digital Press',
    content:
      'Interview transcription used to take hours. Now I upload, get a transcript, summary, and key quotes in minutes.',
    rating: 5,
  },
  {
    name: 'Lisa Park',
    role: 'HR Director',
    company: 'GlobalTech',
    content:
      'We process hundreds of training videos. The RAG search lets our team find specific policies across all recordings.',
    rating: 5,
  },
  {
    name: 'James Wright',
    role: 'Podcast Host',
    company: 'The Daily Insight',
    content:
      'Episode summaries and show notes are generated automatically. My workflow has never been smoother.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent pointer-events-none"
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
            badge="Testimonials"
            title="Loved by creators and teams"
            description="See how professionals across industries are transforming their video workflows with AI."
          />
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={fadeInUp}>
              <GlassCard hover className="h-full flex flex-col">
                <Quote
                  className="h-8 w-8 text-accent-blue/30"
                  aria-hidden="true"
                />

                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div
                  className="mt-6 flex items-center gap-1"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent-blue text-accent-blue"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3 border-t border-white/5 pt-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-purple text-sm font-bold text-white"
                    aria-hidden="true"
                  >
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
