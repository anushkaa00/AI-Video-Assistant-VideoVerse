import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { scrollToSection } from '@/lib/scroll'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', hash: '#home' },
  { label: 'Features', hash: '#features' },
  { label: 'About', hash: '#about' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isLanding = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const handleNavClick = (hash: string) => {
    if (isLanding) {
      scrollToSection(hash.replace('#', ''))
    }
  }

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
        <Link
          to="/"
          className="cursor-pointer group transition-opacity duration-200 hover:opacity-90"
          aria-label="VideoVerse home"
        >
          <Logo size="sm" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            isLanding ? (
              <button
                key={link.hash}
                type="button"
                onClick={() => handleNavClick(link.hash)}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.hash}
                to={`/${link.hash}`}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" onClick={() => navigate('/sign-in')}>
            Sign In
          </Button>
          <Button variant="secondary" size="sm" onClick={() => navigate('/chat')}>
            Chat
          </Button>
          <Button variant="primary" size="sm" magnetic onClick={() => navigate('/dashboard')}>
            Dashboard
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
              {navLinks.map((link) =>
                isLanding ? (
                  <button
                    key={link.hash}
                    type="button"
                    onClick={() => {
                      handleNavClick(link.hash)
                      setMobileOpen(false)
                    }}
                    className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.hash}
                    to={`/${link.hash}`}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
                <Button
                  variant="ghost"
                  size="md"
                  className="w-full"
                  onClick={() => navigate('/sign-in')}
                >
                  Sign In
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full"
                  onClick={() => navigate('/chat')}
                >
                  Chat
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  magnetic
                  className="w-full"
                  onClick={() => navigate('/dashboard')}
                >
                  Dashboard
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
