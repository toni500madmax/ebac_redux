import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'

import { GlobalStyle } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import FavCartContainer from './components/cart/favCart'
import { toggleFalse } from './store/reducers/FavCart'
import { CartItemContainer } from './components/cart/styleCarts'
import ProdutosComponent from './containers/Produtos'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  const favCartVisible = useSelector(
    (state: RootState) => state.favoritesCart.isVisible
  )

  const dispatch = useDispatch()
  const menuRef = useRef<HTMLDivElement>(null)

  const handleOutsideMenu = (e: any) => {
    if (favCartVisible && !menuRef.current?.contains(e.target as Node)) {
      dispatch(toggleFalse())
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleOutsideMenu)
  })

  return (
    <>
      <GlobalStyle />
      <div className="container" ref={menuRef}>
        <Header />
        <ProdutosComponent produtos={produtos} />
      </div>
      <div>
        <CartItemContainer
          className={'favoritos' + (favCartVisible === true ? 'active' : '')}
        >
          <FavCartContainer produtos={produtos} />
        </CartItemContainer>
      </div>
    </>
  )
}

export default App
