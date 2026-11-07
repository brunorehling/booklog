import axios, { AxiosError } from 'axios'


export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
})

export const TOKEN_KEY = 'booklog_token'
export const USUARIO_KEY = 'booklog_usuario'

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY)
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (response) => {
    const tipo = String(response.headers['content-type'] ?? '')
    if (tipo.includes('text/html')) {
      return Promise.reject(new Error(`A API respondeu HTML em vez de JSON. Confira o VITE_API_URL no .env (precisa começar com https://). URL chamada: ${response.config.baseURL ?? ''}${response.config.url ?? ''}`))
    }
    return response
  },
  (error: AxiosError) => {
    const isLoginRequest = error.config?.url?.includes('/login')
    if (error.response?.status === 401 && !isLoginRequest) {
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(USUARIO_KEY)
    }
    return Promise.reject(error)
  }
)

export function getErrorMessage(error: unknown): string {
  if (!axios.isAxiosError(error)) return error instanceof Error ? error.message : 'Erro inesperado. Tente de novo.'
  if (!error.response) return 'Não foi possível conectar à API. Verifique se o backend está rodando.'

  const data = error.response.data as Record<string, unknown> | undefined
  if (!data) return `Erro ${error.response.status}`

  if (typeof data.erro === 'string') return data.erro
  if (typeof data.mensagem === 'string') return data.mensagem
  if (typeof data.error === 'string') return data.error

  const flat = data.error as { formErrors?: string[]; fieldErrors?: Record<string, string[]> } | undefined
  const primeiraMsg = flat?.formErrors?.[0] ?? Object.values(flat?.fieldErrors ?? {})[0]?.[0]
  if (primeiraMsg) return primeiraMsg

  if (Array.isArray(data.erros) && data.erros[0]?.message) return data.erros[0].message

  return `Erro ${error.response.status}`
}
