import { api, getErrorMessage } from './api'
import type { ChatMessage } from '@/types'

export const chatService = {
  async getHistory(analysisId: string): Promise<ChatMessage[]> {
    try {
      const { data } = await api.get<{ messages: ChatMessage[] }>(
        `/chat/${analysisId}/history`,
      )
      return data.messages
    } catch (error) {
      throw new Error(getErrorMessage(error))
    }
  },

  async sendMessage(
    analysisId: string,
    question: string,
  ): Promise<{ answer: string; messages: ChatMessage[] }> {
    try {
      const { data } = await api.post<{ answer: string; messages: ChatMessage[] }>(
        `/chat/${analysisId}`,
        { question },
      )
      return data
    } catch (error) {
      throw new Error(getErrorMessage(error))
    }
  },
}
