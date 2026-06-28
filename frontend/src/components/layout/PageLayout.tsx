import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { BackgroundEffects } from '@/components/ui/BackgroundEffects'

interface PageLayoutProps {
  children: ReactNode
  title: string
  description?: string
}

export function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <motion.div
      className="relative min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <BackgroundEffects />
      <Navbar />
      <main className="relative pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
            {description && (
              <p className="mt-3 max-w-2xl text-slate-400">{description}</p>
            )}
          </div>
          {children}
        </div>
      </main>
    </motion.div>
  )
}
