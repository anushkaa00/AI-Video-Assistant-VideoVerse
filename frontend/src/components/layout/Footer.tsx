import { Twitter, Github, Linkedin, Mail } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

const quickLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'FAQ', href: '#faq' },
]

const productLinks = [
  { label: 'AI Transcription', href: '#features' },
  { label: 'Chat with Video', href: '#features' },
  { label: 'Semantic Search', href: '#features' },
  { label: 'Export Results', href: '#features' },
]

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hello@videoverse.app', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="absolute inset-0 glass opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="cursor-pointer" aria-label="VideoVerse home">
              <Logo size="md" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Free AI-powered video intelligence. Transcribe, summarize, and
              chat with your video content instantly.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg glass text-slate-500 hover:text-white hover:border-white/15 hover:bg-white/[0.06] transition-all duration-200 cursor-pointer"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Product
            </h3>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="mailto:hello@videoverse.app"
                  className="text-sm text-slate-500 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  hello@videoverse.app
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8">
          <p className="text-center text-sm text-slate-600">
            &copy; {new Date().getFullYear()} VideoVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
