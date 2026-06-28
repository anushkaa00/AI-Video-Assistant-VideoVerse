import { useState } from 'react'
import { Send, MessageSquare } from 'lucide-react'
import { PageLayout } from '@/components/layout/PageLayout'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface Message {
  id: number
  role: 'user' | 'assistant'
  content: string
}

export default function ChatPage() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      content:
        'Hello! Upload and analyze a video first, then ask me anything about its content.',
    },
  ])

  const handleSend = () => {
    if (!input.trim()) return
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), role: 'user', content: input.trim() },
      {
        id: Date.now() + 1,
        role: 'assistant',
        content:
          'Chat with video will be available once you analyze a video. Head to the home page to get started.',
      },
    ])
    setInput('')
  }

  return (
    <PageLayout
      title="AI Chat"
      description="Ask questions about your analyzed video content."
    >
      <div className="flex h-[calc(100vh-16rem)] flex-col glass-strong rounded-2xl overflow-hidden shadow-elevated">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                'flex',
                msg.role === 'user' ? 'justify-end' : 'justify-start',
              )}
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
          ))}
        </div>

        <div className="border-t border-white/[0.06] p-4">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about your video..."
              className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent-blue/40 focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
            />
            <Button variant="primary" size="md" magnetic onClick={handleSend}>
              <Send className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
        <MessageSquare className="h-4 w-4" aria-hidden="true" />
        <span>Powered by VideoVerse RAG pipeline</span>
      </div>
    </PageLayout>
  )
}
