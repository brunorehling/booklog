import { api } from './api'
import type { CriarUsuarioRequest, Usuario } from '../types/UsuarioType'

export async function getUsuarios(): Promise<Usuario[]> {
  const { data } = await api.get<Usuario[]>('/usuarios')
  return data
}

export async function getUsuario(id: number): Promise<Usuario> {
  const { data } = await api.get<Usuario>(`/usuarios/${id}`)
  return data
}

// Cadastro. A senha precisa ter 8+ caracteres, maiúscula, minúscula, número e símbolo.
export async function criarUsuario(usuario: CriarUsuarioRequest): Promise<Usuario> {
  const { data } = await api.post<Usuario>('/usuarios', usuario)
  return data
}
