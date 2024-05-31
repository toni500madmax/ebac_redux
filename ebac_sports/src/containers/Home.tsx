import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import FavCartContainer from '../components/cart/favCart'
import { CartItemContainer } from '../components/cart/styleCarts'
import ProdutosComponent from '../containers/Produtos'

export default function Home() {
  const favCartVisible = useSelector(
    (state: RootState) => state.favoritesCart.isVisible
  )

  return (
    <>
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
    </>
  )
}
