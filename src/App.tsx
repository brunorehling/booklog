import { Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Feed from './pages/Feed'
import MinhaLista from './pages/MinhaLista'

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/Minhalista" element={<MinhaLista />} />
      </Routes>
    </>
  )
}

export default App
