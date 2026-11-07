import { api } from './api'
import type { Comentario, ComentarioRequest, Review, ReviewRequest } from '../types/ReviewType'

export async function getReviews(): Promise<Review[]> {
  const { data } = await api.get<Review[]>('/reviews')
  return data
}

export async function getReview(id: number): Promise<Review> {
  const { data } = await api.get<Review>(`/reviews/${id}`)
  return data
}

export async function getMinhasReviews(usuarioId: number): Promise<Review[]> {
  const { data } = await api.get<Review[]>('/reviews/minhasReviews', { params: { usuarioId } })
  return data
}

export async function pesquisarReviews(termo: string): Promise<Review[]> {
  const { data } = await api.get<Review[]>(`/reviews/pesquisa/${encodeURIComponent(termo)}`)
  return data
}

export async function criarReview(review: ReviewRequest): Promise<Review> {
  const { data } = await api.post<Review>('/reviews', review)
  return data
}

export async function atualizarReview(id: number, review: ReviewRequest): Promise<Review> {
  const { data } = await api.put<Review>(`/reviews/${id}`, review)
  return data
}

export async function deletarReview(id: number): Promise<void> {
  await api.delete(`/reviews/${id}`)
}


export async function getComentarios(reviewId: number): Promise<Comentario[]> {
  const { data } = await api.get<Comentario[]>(`/reviews/${reviewId}/comentarios`)
  return data
}

export async function criarComentario(reviewId: number, comentario: ComentarioRequest): Promise<Comentario> {
  const { data } = await api.post<Comentario>(`/reviews/${reviewId}/comentarios`, comentario)
  return data
}
