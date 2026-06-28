import { LayoutDashboard, FolderOpen, Clock, BarChart3 } from 'lucide-react'
import { PageLayout } from '@/components/layout/PageLayout'
import { GlassCard } from '@/components/ui/GlassCard'

const stats = [
  { icon: FolderOpen, label: 'Projects', value: '0' },
  { icon: Clock, label: 'Recent Videos', value: '0' },
  { icon: BarChart3, label: 'Analyses', value: '0' },
]

export default function DashboardPage() {
  return (
    <PageLayout
      title="Dashboard"
      description="Manage your video projects, track analyses, and access your AI tools."
    >
      <div className="grid gap-5 sm:grid-cols-3">
        {stats.map(({ icon: Icon, label, value }) => (
          <GlassCard key={label} hover glow>
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/15 to-accent-purple/15 border border-white/10">
                <Icon className="h-5 w-5 text-accent-blue" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm text-slate-400">{label}</p>
                <p className="text-2xl font-bold text-white">{value}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="mt-8 flex flex-col items-center justify-center py-20 text-center" glow>
        <LayoutDashboard
          className="h-12 w-12 text-accent-blue/50"
          aria-hidden="true"
        />
        <p className="mt-4 text-lg font-medium text-white">
          Your dashboard is ready
        </p>
        <p className="mt-2 max-w-md text-sm text-slate-400">
          Analyze a video from the home page to see your projects and insights
          appear here.
        </p>
      </GlassCard>
    </PageLayout>
  )
}
