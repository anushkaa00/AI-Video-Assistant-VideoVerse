const STORAGE_KEY = 'videoverse_analyses'
const ACTIVE_KEY = 'videoverse_active_analysis'

export function getStoredAnalysisIds(): string[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as string[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function addStoredAnalysisId(id: string): void {
  const ids = getStoredAnalysisIds()
  if (!ids.includes(id)) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify([id, ...ids]))
  }
}

export function removeStoredAnalysisId(id: string): void {
  const ids = getStoredAnalysisIds().filter((item) => item !== id)
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  if (getActiveAnalysisId() === id) {
    sessionStorage.removeItem(ACTIVE_KEY)
  }
}

export function getActiveAnalysisId(): string | null {
  return sessionStorage.getItem(ACTIVE_KEY)
}

export function setActiveAnalysisId(id: string): void {
  sessionStorage.setItem(ACTIVE_KEY, id)
}

export function setAuthToken(token: string): void {
  sessionStorage.setItem('videoverse_token', token)
}

export function clearAuthToken(): void {
  sessionStorage.removeItem('videoverse_token')
}

export function getAuthToken(): string | null {
  return sessionStorage.getItem('videoverse_token')
}
