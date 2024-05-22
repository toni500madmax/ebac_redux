import { ProductInfo, ProductItem } from './styleCarts'
import { Produto as ProdutoType } from '../../App'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { closeFav } from '../../store/reducers/FavCart'

type Props = {
  produtos: ProdutoType[]
}

export default function FavCartContainer({ produtos }: Props) {
  const produtoFavorite = useSelector((state: RootState) => {
    return state.favorites.itens || []
  })
  const dispatch = useDispatch()

  const produtosFavoritos = produtos.filter((produto) =>
    produtoFavorite.some((favoriteProduto) => favoriteProduto.id === produto.id)
  )

  return (
    <>
      <aside>
        <p onClick={() => dispatch(closeFav())}>fechar</p>
      </aside>
      <h1>Favoritos</h1>
      <div>
        {produtosFavoritos.map((item) => {
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
