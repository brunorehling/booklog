export type StatusDenuncia = 'PENDENTE' | 'AVALIADA' | 'IGNORADA' | 'RESOLVIDA'

export interface Denuncia {
  id: number
  comentarioId: number
  usuarioId: number
  motivo: string
  status: StatusDenuncia
  resolvidoPor: string | null
  createdAt: string
}

export interface DenunciaRequest {
  comentarioId: number
  usuarioId: number
  motivo: string // mín. 5 caracteres
}

export interface DenunciaResponse {
  mensagem: string
  denuncia: Denuncia
}
