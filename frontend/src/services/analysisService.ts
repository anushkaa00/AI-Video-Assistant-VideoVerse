import { api, getErrorMessage } from './api'
import type { AnalysisResult, AnalysisSummary, Language, SourceType } from '@/types'

export const analysisService = {
  async analyzeVideo(payload: {
    sourceType: SourceType
    language: Language
    url?: string
    file?: File
  }): Promise<AnalysisResult> {
    const formData = new FormData()
    formData.append('source_type', payload.sourceType)
    formData.append('language', payload.language)

    if (payload.sourceType === 'youtube') {
      formData.append('url', payload.url || '')
    } else if (payload.file) {
      formData.append('file', payload.file)
    }

    try {
      const { data } = await api.post<AnalysisResult>('/analysis', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      return data
    } catch (error) {
      throw new Error(getErrorMessage(error))
    }
  },

  async getAnalysis(analysisId: string): Promise<AnalysisResult> {
    try {
      const { data } = await api.get<AnalysisResult>(`/analysis/${analysisId}`)
      return data
    } catch (error) {
      throw new Error(getErrorMessage(error))
    }
  },

  async listAnalyses(ids?: string[]): Promise<AnalysisSummary[]> {
    try {
      const { data } = await api.post<{ analyses: AnalysisSummary[] }>(
        '/analysis/list',
        ids ? { ids } : {},
      )
      return data.analyses
    } catch (error) {
      throw new Error(getErrorMessage(error))
    }
  },

  async deleteAnalysis(analysisId: string): Promise<void> {
    try {
      await api.delete(`/analysis/${analysisId}`)
    } catch (error) {
      throw new Error(getErrorMessage(error))
    }
  },
}
