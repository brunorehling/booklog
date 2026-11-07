export type Genero = 'ACAO' | 'DRAMA' | 'FICCAO' | 'TERROR' | 'ROMANCE' | 'COMEDIA'

export interface Autor {
  id: number
  nome: string
}

export interface Livro {
  id: number
  nome: string
  dataLancamento: string
  foto: string
  descricao: string
  genero: Genero | null
  autor_id: number | null
  autor?: Autor | null
  createdAt: string
  updatedAt: string
}

export interface LivroRequest {
  nome: string
  dataLancamento: string
  foto: string
  descricao: string 
  genero?: Genero
  autorNome: string
}

export interface AutorRequest {
  nome: string
}
