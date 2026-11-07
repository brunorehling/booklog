export interface Usuario {
  id: number
  nome: string
  email?: string
  createdAt: string
  updatedAt: string
}

export interface CriarUsuarioRequest {
  nome: string
  email: string
  senha: string
}

export interface LoginRequest {
  email: string
  senha: string
}

// POST /usuarios/login devolve só id, email e token (sem o nome)
export interface LoginResponse {
  id: number
  email: string
  token: string
}
