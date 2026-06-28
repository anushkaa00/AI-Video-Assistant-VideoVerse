import { api, getErrorMessage } from './api'
import type { AuthResponse, User } from '@/types'

export const authService = {
  async register(name: string, email: string, password: string): Promise<AuthResponse> {
    try {
      const { data } = await api.post<AuthResponse>('/auth/register', {
        name,
        email,
        password,
      })
      return data
    } catch (error) {
      throw new Error(getErrorMessage(error))
    }
  },

  async login(email: string, password: string): Promise<AuthResponse> {
    try {
      const { data } = await api.post<AuthResponse>('/auth/login', {
        email,
        password,
      })
      return data
    } catch (error) {
      throw new Error(getErrorMessage(error))
    }
  },

  async logout(): Promise<void> {
    try {
      await api.post('/auth/logout')
    } catch {
      // Ignore logout network errors — local session is cleared regardless.
    }
  },

  async getMe(): Promise<User> {
    try {
      const { data } = await api.get<{ user: User }>('/auth/me')
      return data.user
    } catch (error) {
      throw new Error(getErrorMessage(error))
    }
  },
}
