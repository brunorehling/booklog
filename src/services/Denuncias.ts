import { api } from './api'
import type { Denuncia, DenunciaRequest, DenunciaResponse } from '../types/DenunciaType'


export async function getDenuncias(): Promise<Denuncia[]> {
  const { data } = await api.get<Denuncia[]>('/denuncias')
  return data
}

export async function criarDenuncia(denuncia: DenunciaRequest): Promise<DenunciaResponse> {
  const { data } = await api.post<DenunciaResponse>('/denuncias', denuncia)
  return data
}
