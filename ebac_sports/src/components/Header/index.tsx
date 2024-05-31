import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { openFav } from '../../store/reducers/FavCart'
import { Link } from 'react-router-dom'

const Header = () => {
  const favoriteItens = useSelector((state: RootState) => state.favorites.itens)
  const buyItens = useSelector((state: RootState) => state.buy.itens)
  const dispatch = useDispatch()

  const valorTotal = buyItens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <S.FavButton onClick={() => dispatch(openFav())}>
          <span>
            {favoriteItens.length < 2
              ? `${favoriteItens.length} favorito`
              : `${favoriteItens.length} favoritos`}
          </span>
        </S.FavButton>
        <Link to="/buycart" className="link">
          <S.CartButton src={cesta} />
        </Link>
        <span>
          {buyItens.length < 2
            ? `${buyItens.length} item`
            : `${buyItens.length} itens`}{' '}
          , valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
