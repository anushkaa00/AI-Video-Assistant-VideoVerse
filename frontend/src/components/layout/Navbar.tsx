import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Play, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6',
          scrolled
            ? 'glass-strong shadow-glass'
            : 'bg-transparent border border-transparent',
        )}
        aria-label="Main navigation"
      >
        <a
          href="/"
          className="flex items-center gap-2.5 cursor-pointer group"
          aria-label="AI Video Assistant home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple shadow-glow-blue">
            <Play className="h-4 w-4 fill-white text-white" aria-hidden="true" />
          </div>
          <span className="text-lg font-bold text-white group-hover:text-slate-200 transition-colors">
            VidAI
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button variant="primary" size="sm" magnetic>
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Start Free
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl glass cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-7xl glass-strong rounded-2xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
                <Button variant="ghost" size="md" className="w-full">
                  Sign in
                </Button>
                <Button variant="primary" size="md" magnetic className="w-full">
                  Start Free
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
