import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Link2,
  Upload,
  ArrowRight,
  ChevronDown,
  FileVideo,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { LoadingOverlay } from '@/components/ui/LoadingOverlay'
import { fadeInUp, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { analysisService } from '@/services/analysisService'
import { useToast } from '@/context/ToastContext'
import {
  addStoredAnalysisId,
  setActiveAnalysisId,
} from '@/lib/session'
import type { Language } from '@/types'

type InputMode = 'youtube' | 'upload'

const languages: { value: Language; label: string }[] = [
  { value: 'english', label: 'English' },
  { value: 'hinglish', label: 'Hinglish' },
]

const ALLOWED_EXTENSIONS = ['mp4', 'mov', 'mkv', 'avi', 'mp3', 'wav']
const MAX_FILE_SIZE_MB = 500

export function AnalyzeVideoSection() {
  const [mode, setMode] = useState<InputMode>('youtube')
  const [url, setUrl] = useState('')
  const [language, setLanguage] = useState<Language>('english')
  const [file, setFile] = useState<File | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const { showToast } = useToast()

  const validateFile = (selected: File): string | null => {
    const extension = selected.name.split('.').pop()?.toLowerCase()
    if (!extension || !ALLOWED_EXTENSIONS.includes(extension)) {
      return 'Unsupported file type. Allowed: mp4, mov, mkv, avi, mp3, wav.'
    }
    if (selected.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      return `File exceeds maximum size of ${MAX_FILE_SIZE_MB} MB.`
    }
    return null
  }

  const handleFile = (selected: File | null) => {
    if (!selected) return
    const error = validateFile(selected)
    if (error) {
      showToast(error, 'error')
      return
    }
    setFile(selected)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const dropped = e.dataTransfer.files[0]
    if (dropped) handleFile(dropped)
  }

  const handleAnalyze = async () => {
    if (mode === 'youtube' && !url.trim()) {
      showToast('Please enter a YouTube URL.', 'error')
      return
    }
    if (mode === 'upload' && !file) {
      showToast('Please upload a video or audio file.', 'error')
      return
    }

    setLoading(true)
    try {
      const result = await analysisService.analyzeVideo({
        sourceType: mode,
        language,
        url: mode === 'youtube' ? url.trim() : undefined,
        file: mode === 'upload' ? file ?? undefined : undefined,
      })

      addStoredAnalysisId(result.id)
      setActiveAnalysisId(result.id)
      showToast('Video analyzed successfully.', 'success')
      navigate(`/results/${result.id}`)
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Analysis failed.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {loading && <LoadingOverlay />}

      <section id="analyze" className="relative scroll-mt-28 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="relative"
          >
            <div
              className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent-blue/10 via-accent-glow/10 to-accent-purple/10 blur-xl"
              aria-hidden="true"
            />

            <div className="relative glass-strong rounded-3xl p-6 sm:p-8 shadow-elevated gradient-border transition-all duration-300 hover:border-white/10 hover:shadow-glow">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Analyze Video
                </h2>
                <p className="mt-2 text-sm text-slate-400 sm:text-base">
                  Paste a YouTube link or upload a local file to get started.
                </p>
              </div>

              <div className="mt-6 flex rounded-xl bg-white/[0.03] p-1 border border-white/[0.06]">
                <button
                  type="button"
                  onClick={() => setMode('youtube')}
                  className={cn(
                    'flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer',
                    mode === 'youtube'
                      ? 'bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 text-white border border-white/10 shadow-glow'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]',
                  )}
                >
                  <Link2 className="h-4 w-4" aria-hidden="true" />
                  YouTube URL
                </button>
                <button
                  type="button"
                  onClick={() => setMode('upload')}
                  className={cn(
                    'flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer',
                    mode === 'upload'
                      ? 'bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 text-white border border-white/10 shadow-glow'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]',
                  )}
                >
                  <Upload className="h-4 w-4" aria-hidden="true" />
                  Upload File
                </button>
              </div>

              <div className="mt-6 space-y-5">
                {mode === 'youtube' ? (
                  <div>
                    <label
                      htmlFor="youtube-url"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      YouTube URL
                    </label>
                    <input
                      id="youtube-url"
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://www.youtube.com/watch?v=..."
                      disabled={loading}
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 transition-all duration-200 focus:border-accent-blue/40 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-accent-blue/20 disabled:opacity-50"
                    />
                  </div>
                ) : (
                  <div>
                    <span className="mb-2 block text-sm font-medium text-slate-300">
                      Local Video / File
                    </span>
                    <div
                      role="button"
                      tabIndex={0}
                      onDragOver={(e) => {
                        e.preventDefault()
                        setDragOver(true)
                      }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                      onClick={() => !loading && fileInputRef.current?.click()}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          fileInputRef.current?.click()
                        }
                      }}
                      className={cn(
                        'relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-10 transition-all duration-200',
                        dragOver
                          ? 'border-accent-blue/50 bg-accent-blue/5'
                          : 'border-white/[0.1] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]',
                        loading && 'pointer-events-none opacity-50',
                      )}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="video/*,audio/*,.mp4,.mov,.avi,.mkv,.mp3,.wav"
                        className="sr-only"
                        disabled={loading}
                        onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
                      />
                      {file ? (
                        <div className="flex items-center gap-3">
                          <FileVideo
                            className="h-8 w-8 text-accent-blue"
                            aria-hidden="true"
                          />
                          <div className="text-left">
                            <p className="text-sm font-medium text-white">{file.name}</p>
                            <p className="text-xs text-slate-500">
                              {(file.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              setFile(null)
                            }}
                            className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                            aria-label="Remove file"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <Upload className="h-10 w-10 text-slate-500" aria-hidden="true" />
                          <p className="mt-3 text-sm font-medium text-slate-300">
                            Drag and drop your video here
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            or click to browse · MP4, MOV, AVI, MKV, MP3, WAV
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="language"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Language
                  </label>
                  <div className="relative">
                    <select
                      id="language"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value as Language)}
                      disabled={loading}
                      className="w-full appearance-none rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3.5 pr-10 text-sm text-white transition-all duration-200 focus:border-accent-blue/40 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-accent-blue/20 cursor-pointer disabled:opacity-50"
                    >
                      {languages.map((lang) => (
                        <option
                          key={lang.value}
                          value={lang.value}
                          className="bg-charcoal text-white"
                        >
                          {lang.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  magnetic
                  className="w-full sm:w-auto"
                  onClick={handleAnalyze}
                  disabled={loading}
                >
                  {loading ? 'Analyzing...' : 'Analyze Video'}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
