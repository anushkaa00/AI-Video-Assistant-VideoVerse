import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Lock } from 'lucide-react'
import { PageLayout } from '@/components/layout/PageLayout'
import { Button } from '@/components/ui/Button'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <PageLayout
      title="Sign In"
      description="Access your VideoVerse account."
    >
      <div className="mx-auto max-w-md">
        <div className="glass-strong rounded-3xl p-8 shadow-elevated gradient-border">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                  aria-hidden="true"
                />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-accent-blue/40 focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                  aria-hidden="true"
                />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-accent-blue/40 focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
                />
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" magnetic className="w-full">
              Sign In
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Don&apos;t have an account?{' '}
            <Link
              to="/"
              className="text-accent-blue hover:text-accent-purple transition-colors cursor-pointer"
            >
              Get started for free
            </Link>
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
