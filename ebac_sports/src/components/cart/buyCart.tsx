import { ProductInfo, ProductItem } from './styleCarts'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { closeCart } from '../../store/reducers/buy'
import { useGetProdutosQuery } from '../../services/api'

export default function BuyCart() {
  const query = useGetProdutosQuery()
  const { data: produtos } = query

  const produtosParaComprar = useSelector((state: RootState) => {
    return state.buy.itens || []
  })
  const dispatch = useDispatch()

  const produtosAdicionados = produtos?.filter((produto) =>
    produtosParaComprar.some(
      (produtoComprar) => produtoComprar.id === produto.id
    )
  )

  return (
    <>
      <aside>
        <p onClick={() => dispatch(closeCart())}>fechar</p>
      </aside>
      <h1>Carrinho</h1>
      <div>
        {produtosAdicionados?.map((item) => {
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
