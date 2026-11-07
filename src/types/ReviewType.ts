import type { Livro } from './LivroType'
import type { Usuario } from './UsuarioType'

export interface Review {
  id: number
  titulo: string
  conteudo: string | null
  nota: number // 1 a 5
  usuarioId: number
  livros_id: number
  usuario: Usuario
  livro: Livro
  createdAt: string
  updatedAt: string
}

export interface ReviewRequest {
  titulo: string
  conteudo?: string // máx. 1000 caracteres
  nota: number
  usuarioId: number
  livros_id: number
}

export interface Comentario {
  id: number
  conteudo: string
  usuarioId: number
  reviewId: number
  usuario: Pick<Usuario, 'id' | 'nome'> | null
  createdAt: string
  updatedAt: string
}

export interface ComentarioRequest {
  conteudo: string
  usuarioId: number
}
