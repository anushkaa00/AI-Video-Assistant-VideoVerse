import { Play, Twitter, Github, Linkedin, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Changelog', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Community', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Privacy', href: '#' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a
              href="/"
              className="flex items-center gap-2.5 cursor-pointer"
              aria-label="AI Video Assistant home"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple">
                <Play className="h-4 w-4 fill-white text-white" aria-hidden="true" />
              </div>
              <span className="text-lg font-bold text-white">VidAI</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Transform long videos into actionable insights with AI-powered
              transcription, summarization, and intelligent Q&A.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200 cursor-pointer"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} VidAI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy
            </a>
            <Button variant="outline" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
