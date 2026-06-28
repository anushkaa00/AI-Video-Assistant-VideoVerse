import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/motion'
import { cn, formatPrice } from '@/lib/utils'

interface Plan {
  name: string
  price: number
  period: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: 0,
    period: 'forever',
    description: 'Perfect for trying out AI video intelligence.',
    features: [
      '3 videos per month',
      'Basic transcription',
      'AI summary (limited)',
      'Export as text',
      'Community support',
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Pro',
    price: 29,
    period: 'month',
    description: 'For creators and professionals who need more power.',
    features: [
      'Unlimited videos',
      'Whisper transcription',
      'Full AI summaries',
      'Action item extraction',
      'Chat with video (RAG)',
      'Priority support',
    ],
    popular: true,
    cta: 'Start Pro Trial',
  },
  {
    name: 'Enterprise',
    price: 99,
    period: 'month',
    description: 'For teams with advanced collaboration needs.',
    features: [
      'Everything in Pro',
      'Team workspaces',
      'Custom AI models',
      'API access',
      'SSO & audit logs',
      'Dedicated support',
    ],
    cta: 'Contact Sales',
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <SectionHeader
            badge="Pricing"
            title="Simple, transparent pricing"
            description="Start free and scale as you grow. All plans include a 14-day trial with full Pro features."
          />
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={fadeInUp}>
              <GlassCard
                className={cn(
                  'relative h-full flex flex-col',
                  plan.popular &&
                    'border-accent-blue/30 shadow-glow-lg gradient-border',
                )}
                glow={plan.popular}
                padding="lg"
              >
                {plan.popular && (
                  <Badge
                    variant="gradient"
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                  >
                    Most Popular
                  </Badge>
                )}

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{plan.description}</p>
                </div>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">
                    {plan.price === 0 ? 'Free' : formatPrice(plan.price)}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-sm text-slate-500">/{plan.period}</span>
                  )}
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        className="h-4 w-4 shrink-0 text-accent-blue mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  magnetic
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
