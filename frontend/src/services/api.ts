import axios, { AxiosError } from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'
const API_TIMEOUT = Number(import.meta.env.VITE_API_TIMEOUT || 1800000)

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    Accept: 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('videoverse_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ error?: string }>
    if (axiosError.code === 'ECONNABORTED') {
      return 'Request timed out. The video may still be processing — please try again.'
    }
    if (!axiosError.response) {
      return 'Network error. Please check your connection and ensure the backend is running.'
    }
    return axiosError.response.data?.error || axiosError.message
  }
  if (error instanceof Error) {
    return error.message
  }
  return 'Something went wrong. Please try again.'
}
