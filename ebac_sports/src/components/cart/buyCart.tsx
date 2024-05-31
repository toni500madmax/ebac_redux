import { CartItemContainer, ProductInfo, ProductItem } from './styleCarts'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useGetProdutosQuery } from '../../services/api'
import { BuyContainer } from '../../containers/styles'
import { Link } from 'react-router-dom'

export default function BuyCart() {
  const query = useGetProdutosQuery()
  const { data: produtos } = query

  const produtosParaComprar = useSelector((state: RootState) => {
    return state.buy.itens || []
  })

  const produtosAdicionados = produtos?.filter((produto) =>
    produtosParaComprar.some(
      (produtoComprar) => produtoComprar.id === produto.id
    )
  )

  return (
    <BuyContainer>
      <CartItemContainer containerType="">
        <aside>
          <Link to="/">
            <p>fechar</p>
          </Link>
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
      </CartItemContainer>
    </BuyContainer>
  )
}
