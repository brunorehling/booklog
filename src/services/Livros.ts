import { api } from './api'
import type { Livro, LivroRequest } from '../types/LivroType'


export async function getLivros(): Promise<Livro[]> {
  const { data } = await api.get<Livro[]>('/livros')
  return data
}

export async function getLivro(id: number): Promise<Livro> {
  const { data } = await api.get<Livro>(`/livros/${id}`)
  return data
}

export async function pesquisarLivros(termo: string): Promise<Livro[]> {
  const { data } = await api.get<Livro[]>(`/livros/pesquisa/${encodeURIComponent(termo)}`)
  return data
}

export async function criarLivro(livro: LivroRequest): Promise<Livro> {
  const { data } = await api.post<Livro>('/livros', livro)
  return data
}

export async function atualizarLivro(id: number, livro: LivroRequest): Promise<Livro> {
  const { data } = await api.put<Livro>(`/livros/${id}`, livro)
  return data
}

export async function deletarLivro(id: number): Promise<void> {
  await api.delete(`/livros/${id}`)
}
