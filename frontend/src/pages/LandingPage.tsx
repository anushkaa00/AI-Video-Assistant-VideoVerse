import { motion } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { BackgroundEffects } from '@/components/ui/BackgroundEffects'
import { HeroSection } from '@/sections/landing/HeroSection'
import { AnalyzeVideoSection } from '@/sections/landing/AnalyzeVideoSection'
import { FeaturesSection } from '@/sections/landing/FeaturesSection'
import { AboutSection } from '@/sections/landing/AboutSection'
import { WorkflowSection } from '@/sections/landing/WorkflowSection'
import { FAQSection } from '@/sections/landing/FAQSection'

export default function LandingPage() {
  return (
    <motion.div
      className="relative min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <BackgroundEffects />
      <Navbar />
      <main>
        <HeroSection />
        <AnalyzeVideoSection />
        <FeaturesSection />
        <AboutSection />
        <WorkflowSection />
        <FAQSection />
      </main>
      <Footer />
    </motion.div>
  )
}
