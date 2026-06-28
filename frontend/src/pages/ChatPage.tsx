import { useEffect, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Send, MessageSquare, ChevronDown } from 'lucide-react'
import { PageLayout } from '@/components/layout/PageLayout'
import { Button } from '@/components/ui/Button'
import { chatService } from '@/services/chatService'
import { analysisService } from '@/services/analysisService'
import { useToast } from '@/context/ToastContext'
import {
  getActiveAnalysisId,
  getStoredAnalysisIds,
  setActiveAnalysisId,
} from '@/lib/session'
import type { AnalysisSummary, ChatMessage } from '@/types'
import { cn } from '@/lib/utils'

export default function ChatPage() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [analyses, setAnalyses] = useState<AnalysisSummary[]>([])
  const [analysisId, setAnalysisId] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [sending, setSending] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { showToast } = useToast()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const bootstrap = async () => {
      const ids = getStoredAnalysisIds()
      if (ids.length === 0) {
        showToast('Analyze a video first to start chatting.', 'info')
        return
      }

      try {
        const data = await analysisService.listAnalyses(ids)
        setAnalyses(data.filter((item) => item.status === 'completed'))

        const paramId = searchParams.get('analysisId')
        const activeId =
          paramId || getActiveAnalysisId() || data.find((item) => item.status === 'completed')?.id

        if (activeId) {
          setAnalysisId(activeId)
          setActiveAnalysisId(activeId)
          await loadHistory(activeId)
        }
      } catch (error) {
        showToast(
          error instanceof Error ? error.message : 'Failed to load chat context.',
          'error',
        )
      }
    }

    bootstrap()
  }, [searchParams, showToast])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const loadHistory = async (id: string) => {
    setLoading(true)
    try {
      const history = await chatService.getHistory(id)
      setMessages(history)
    } catch {
      setMessages([])
    } finally {
      setLoading(false)
    }
  }

  const handleAnalysisChange = async (id: string) => {
    setAnalysisId(id)
    setActiveAnalysisId(id)
    await loadHistory(id)
  }

  const handleSend = async () => {
    if (!input.trim() || !analysisId) {
      if (!analysisId) {
        showToast('Select an analyzed video to chat with.', 'error')
      }
      return
    }

    const question = input.trim()
    setInput('')
    setSending(true)

    setMessages((prev) => [...prev, { role: 'user', content: question }])

    try {
      const response = await chatService.sendMessage(analysisId, question)
      setMessages(response.messages)
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Failed to send message.', 'error')
      setMessages((prev) => prev.slice(0, -1))
    } finally {
      setSending(false)
    }
  }

  return (
    <PageLayout
      title="AI Chat"
      description="Ask questions about your analyzed video content."
    >
      {analyses.length === 0 ? (
        <div className="glass-strong rounded-2xl p-10 text-center shadow-elevated">
          <MessageSquare className="mx-auto h-12 w-12 text-accent-blue/50" aria-hidden="true" />
          <p className="mt-4 text-lg font-medium text-white">No analyzed videos yet</p>
          <p className="mt-2 text-sm text-slate-400">
            Analyze a video on the home page, then return here to chat with its content.
          </p>
          <Button
            variant="primary"
            size="md"
            magnetic
            className="mt-6"
            onClick={() => navigate('/#analyze')}
          >
            Analyze Video
          </Button>
        </div>
      ) : (
        <>
          <div className="mb-4 max-w-md">
            <label htmlFor="analysis-select" className="mb-2 block text-sm text-slate-400">
              Select video
            </label>
            <div className="relative">
              <select
                id="analysis-select"
                value={analysisId}
                onChange={(e) => handleAnalysisChange(e.target.value)}
                className="w-full appearance-none rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 pr-10 text-sm text-white focus:border-accent-blue/40 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 cursor-pointer"
              >
                {analyses.map((analysis) => (
                  <option key={analysis.id} value={analysis.id} className="bg-charcoal">
                    {analysis.title}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="flex h-[calc(100vh-20rem)] flex-col glass-strong rounded-2xl overflow-hidden shadow-elevated">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {loading ? (
                <p className="text-center text-sm text-slate-400">Loading conversation...</p>
              ) : messages.length === 0 ? (
                <p className="text-center text-sm text-slate-400">
                  Ask anything about the selected video transcript.
                </p>
              ) : (
                messages.map((msg, index) => (
                  <div
                    key={`${msg.role}-${index}`}
                    className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}
                  >
                    <div
                      className={cn(
                        'max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed',
                        msg.role === 'user'
                          ? 'bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 text-white border border-white/10'
                          : 'glass text-slate-300',
                      )}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-white/[0.06] p-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !sending && handleSend()}
                  placeholder="Ask about your video..."
                  disabled={sending}
                  className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent-blue/40 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 disabled:opacity-50"
                />
                <Button
                  variant="primary"
                  size="md"
                  magnetic
                  onClick={handleSend}
                  disabled={sending || !analysisId}
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            <span>Powered by VideoVerse RAG pipeline</span>
          </div>
        </>
      )}
    </PageLayout>
  )
}
