import { api } from './api'
import type { Autor, AutorRequest } from '../types/LivroType'

export async function getAutores(): Promise<Autor[]> {
  const { data } = await api.get<Autor[]>('/autores')
  return data
}

export async function criarAutor(autor: AutorRequest): Promise<Autor> {
  const { data } = await api.post<Autor>('/autores', autor)
  return data
}

export async function atualizarAutor(id: number, autor: AutorRequest): Promise<Autor> {
  const { data } = await api.put<Autor>(`/autores/${id}`, autor)
  return data
}

export async function deletarAutor(id: number): Promise<void> {
  await api.delete(`/autores/${id}`)
}
