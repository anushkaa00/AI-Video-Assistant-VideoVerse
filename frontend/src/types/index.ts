export interface User {
  email: string
  name: string
}

export interface AuthResponse {
  token: string
  user: User
}

export interface AnalysisSummary {
  id: string
  title: string
  source_type: string
  source_label: string
  language: string
  status: 'processing' | 'completed' | 'failed'
  created_at: string
  error?: string | null
}

export interface AnalysisResult extends AnalysisSummary {
  transcript: string
  summary: string
  highlights: string
  timestamps: string
  action_items: string
  key_decisions: string
  open_questions: string
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export type Language = 'english' | 'hinglish'
export type SourceType = 'youtube' | 'upload'
