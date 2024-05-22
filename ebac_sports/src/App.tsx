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
  const favCartVisible = useSelector(
    (state: RootState) => state.favoritesCart.isVisible
  )
  const buyCartVisible = useSelector((state: RootState) => state.buy.isVisible)

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <ProdutosComponent />
      </div>
      <div>
        <CartItemContainer
          containerType="favorites"
          className={'favoritos' + (favCartVisible === true ? 'active' : '')}
        >
          <FavCartContainer />
        </CartItemContainer>
      </div>
      <div>
        <CartItemContainer
          containerType="buy"
          className={'favoritos' + (buyCartVisible === true ? 'active' : '')}
        >
          <BuyCart />
        </CartItemContainer>
      </div>
    </>
  )
}

export default App
