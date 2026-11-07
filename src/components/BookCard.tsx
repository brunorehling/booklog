import { useState } from 'react'
import type { Genero, Livro } from '../types/LivroType'

type BookCardProps = {
  livro: Livro
  onClick?: (livro: Livro) => void
}

const GENEROS: Record<Genero, string> = {
  ACAO: 'Ação',
  DRAMA: 'Drama',
  FICCAO: 'Ficção',
  TERROR: 'Terror',
  ROMANCE: 'Romance',
  COMEDIA: 'Comédia',
}

function corDaCapa(texto: string) {
  let h = 0
  for (const c of texto) h = (h * 31 + c.charCodeAt(0)) % 360
  return `hsl(${h} 48% 38%)`
}

function Capa({ livro }: { livro: Livro }) {
  const [erro, setErro] = useState(false)

  if (livro.foto && !erro) {
    return (
      <img
        src={livro.foto}
        alt={`Capa de ${livro.nome}`}
        loading="lazy"
        onError={() => setErro(true)}
        className="aspect-2/3 w-20 shrink-0 rounded-md object-cover sm:w-24"
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      style={{ background: corDaCapa(livro.nome) }}
      className="flex aspect-2/3 w-20 shrink-0 flex-col justify-between rounded-md p-2 text-white sm:w-24"
    >
      <span className="font-titulo text-sm leading-tight font-bold wrap-break-word">{livro.nome}</span>
      <span className="h-0.5 w-7 rounded bg-current opacity-70" />
    </div>
  )
}

export default function BookCard({ livro, onClick }: BookCardProps) {
  const ano = livro.dataLancamento ? new Date(livro.dataLancamento).getFullYear() : null

  const conteudo = (
    <>
      <Capa livro={livro} />

      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <h3 className="font-titulo text-2xl leading-tight font-bold text-balance text-texto-forte">
          {livro.nome}
        </h3>

        <p className="font-ui text-sm text-texto-2">
          {livro.autor?.nome ?? 'Autor desconhecido'}
          {ano && <> · {ano}</>}
        </p>

        {livro.genero && (
          <span className="font-ui w-fit rounded-full bg-superficie-2 px-2.5 py-0.5 text-xs font-semibold text-primaria">
            {GENEROS[livro.genero]}
          </span>
        )}

        {livro.descricao && (
          <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-texto">{livro.descricao}</p>
        )}
      </div>
    </>
  )

  const classes =
    'flex w-full gap-4 rounded-2xl border-2 border-borda bg-superficie p-4 text-left transition-colors duration-200 sm:gap-5 sm:p-5'

  if (onClick) {
    return (
      <button
        type="button"
        onClick={() => onClick(livro)}
        className={`${classes} cursor-pointer hover:border-primaria hover:bg-superficie-2 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primaria`}
      >
        {conteudo}
      </button>
    )
  }

  return <article className={classes}>{conteudo}</article>
}
