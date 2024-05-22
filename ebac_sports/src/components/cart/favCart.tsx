import { ProductInfo, ProductItem } from './styleCarts'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { closeFav } from '../../store/reducers/FavCart'
import { useGetProdutosQuery } from '../../services/api'

export default function FavCartContainer() {
  const query = useGetProdutosQuery()
  const { data: produtos } = query

  const produtoFavorite = useSelector((state: RootState) => {
    return state.favorites.itens || []
  })
  const dispatch = useDispatch()

  const produtosFavoritos = produtos?.filter((produto) =>
    produtoFavorite.some((favoriteProduto) => favoriteProduto.id === produto.id)
  )

  return (
    <>
      <aside>
        <p onClick={() => dispatch(closeFav())}>fechar</p>
      </aside>
      <h1>Favoritos</h1>
      <div>
        {produtosFavoritos?.map((item) => {
          return (
            <ProductItem key={item.id}>
              <img src={item.imagem} alt={item.nome} />
              <ProductInfo>
                <h4>{item.nome}</h4>
                <h4>{item.preco}</h4>
              </ProductInfo>
            </ProductItem>
          )
        })}
      </div>
    </>
  )
}
