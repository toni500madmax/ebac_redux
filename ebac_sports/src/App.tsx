import { useEffect, useState } from 'react'
import Header from './components/Header'

import { GlobalStyle } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from './store'
import FavCartContainer from './components/cart/favCart'
import { CartItemContainer } from './components/cart/styleCarts'
import ProdutosComponent from './containers/Produtos'
import BuyCart from './components/cart/BuyCart'

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
  const buyCartVisible = useSelector((state: RootState) => state.buy.isVisible)

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <ProdutosComponent produtos={produtos} />
      </div>
      <div>
        <CartItemContainer
          containerType="favorites"
          className={'favoritos' + (favCartVisible === true ? 'active' : '')}
        >
          <FavCartContainer produtos={produtos} />
        </CartItemContainer>
      </div>
      <div>
        <CartItemContainer
          containerType="buy"
          className={'favoritos' + (buyCartVisible === true ? 'active' : '')}
        >
          <BuyCart produtos={produtos} />
        </CartItemContainer>
      </div>
    </>
  )
}

export default App
