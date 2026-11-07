import { api, TOKEN_KEY, USUARIO_KEY } from './api'
import type { LoginRequest, LoginResponse } from '../types/UsuarioType'


export async function login(credenciais: LoginRequest): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>('/usuarios/login', credenciais)
  localStorage.setItem(TOKEN_KEY, data.token)
  localStorage.setItem(USUARIO_KEY, JSON.stringify({ id: data.id, email: data.email }))
  return data
}

export function logout(): void {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USUARIO_KEY)
}

export function getUsuarioLogado(): Omit<LoginResponse, 'token'> | null {
  try {
    const salvo = localStorage.getItem(USUARIO_KEY)
    return salvo ? JSON.parse(salvo) : null
  } catch {
    return null
  }
}

export function estaLogado(): boolean {
  return !!localStorage.getItem(TOKEN_KEY)
}
