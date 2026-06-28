import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { fadeInUp, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What video formats do you support?',
    answer:
      'We support all major video and audio formats including MP4, MOV, AVI, MKV, MP3, WAV, and more. You can also paste YouTube URLs directly for processing.',
  },
  {
    question: 'How accurate is the transcription?',
    answer:
      'Our Whisper-powered transcription achieves 98%+ accuracy for clear audio in English. Accuracy may vary with background noise, accents, or multiple speakers.',
  },
  {
    question: 'Is my video data secure?',
    answer:
      'Yes. All uploads are encrypted in transit and at rest. We never use your content to train AI models. Enterprise plans include SSO and audit logs.',
  },
  {
    question: 'Can I chat with multiple videos?',
    answer:
      'Pro and Enterprise plans support multi-video knowledge bases. You can search and ask questions across your entire video library using semantic RAG search.',
  },
  {
    question: 'What languages are supported?',
    answer:
      'Whisper supports 90+ languages for transcription. AI summaries and chat are currently optimized for English, with more languages coming soon.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Absolutely. There are no long-term contracts. Cancel anytime from your account settings and retain access until the end of your billing period.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <SectionHeader
            badge="FAQ"
            title="Frequently asked questions"
            description="Everything you need to know about VidAI. Can't find what you're looking for? Contact our support team."
          />
        </motion.div>

        <motion.div
          className="mt-12 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className="glass rounded-2xl overflow-hidden transition-colors duration-200 hover:border-white/15"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-white sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200',
                      isOpen && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-slate-400">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
