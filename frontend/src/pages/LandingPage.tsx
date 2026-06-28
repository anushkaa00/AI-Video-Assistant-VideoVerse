import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/sections/landing/HeroSection'
import { FeaturesSection } from '@/sections/landing/FeaturesSection'
import { WorkflowSection } from '@/sections/landing/WorkflowSection'
import { PricingSection } from '@/sections/landing/PricingSection'
import { TestimonialsSection } from '@/sections/landing/TestimonialsSection'
import { FAQSection } from '@/sections/landing/FAQSection'
import { CTASection } from '@/sections/landing/CTASection'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
