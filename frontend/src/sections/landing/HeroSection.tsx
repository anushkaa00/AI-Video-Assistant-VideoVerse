import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { AnimatedGradient } from '@/components/ui/AnimatedGradient'
import { VideoPreviewMockup } from '@/components/landing/VideoPreviewMockup'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36">
      <AnimatedGradient variant="hero" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="gradient" className="mb-6">
              <Sparkles className="mr-1.5 h-3 w-3 inline" aria-hidden="true" />
              Free AI Video Intelligence
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl text-balance leading-[1.1]"
          >
            Turn every video into{' '}
            <span className="gradient-text">actionable insights</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed sm:text-xl"
          >
            Transcribe, summarize, extract action items, and chat with your video
            content — powered by cutting-edge AI. Built for creators and
            professionals who value their time.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex justify-center"
          >
            <Button variant="primary" size="lg" magnetic>
              Analyze Video
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </motion.div>
        </motion.div>

        <div className="mt-16 lg:mt-20">
          <VideoPreviewMockup />
        </div>
      </div>
    </section>
  )
}
