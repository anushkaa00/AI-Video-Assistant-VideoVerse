import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { fadeInUp, viewportOnce } from '@/lib/motion'

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="relative overflow-hidden rounded-3xl"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-accent-glow/10 to-accent-purple/20"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-mesh-gradient"
            aria-hidden="true"
          />

          <div className="relative glass-strong px-8 py-16 sm:px-16 sm:py-20 text-center">
            <div className="mx-auto max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-blue border border-accent-blue/20">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Get Started Today
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
                Ready to unlock your video content?
              </h2>

              <p className="mt-4 text-lg text-slate-400 leading-relaxed">
                Join thousands of creators and professionals who save hours every
                week with AI-powered video intelligence.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button variant="primary" size="lg" magnetic>
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
                <Button variant="outline" size="lg" magnetic>
                  Schedule Demo
                </Button>
              </div>

              <p className="mt-6 text-sm text-slate-500">
                14-day free trial · No credit card required · Cancel anytime
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
