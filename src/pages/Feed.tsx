import { useEffect, useState } from "react"
import BookCard from "../components/BookCard"
import { getLivros } from "../services/Livros"
import { getErrorMessage } from "../services/api"
import type { Livro } from "../types/LivroType"

export default function Feed(){
const [livros, setLivros] = useState<Livro[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState("")

  useEffect(() => {
    getLivros()
      .then(setLivros)
      .catch((e) => setErro(getErrorMessage(e)))
      .finally(() => setCarregando(false))
  }, [])

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-titulo mb-6 text-4xl font-bold text-texto-forte">Livros</h1>

      {carregando && <p className="font-ui text-texto-2">Carregando livros…</p>}

      {erro && (
        <p className="font-ui rounded-xl border-2 border-borda bg-superficie p-4 text-texto-2">{erro}</p>
      )}

      {!carregando && !erro && livros.length === 0 && (
        <p className="font-ui text-texto-2">Nenhum livro cadastrado ainda.</p>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {livros.map((livro) => (
          <BookCard key={livro.id} livro={livro} onClick={(l) => console.log("abrir livro", l.id)} />
        ))}
      </div>
    </main>
)}