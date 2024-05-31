import { GlobalStyle } from './styles'
import { Outlet } from 'react-router-dom'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  )
}

export default App
