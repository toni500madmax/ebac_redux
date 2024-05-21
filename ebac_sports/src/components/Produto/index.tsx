import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { RootState } from '../../store'
import { adicionar, remover } from '../../store/reducers/favorites'
import { adicionarAoCarrinho } from '../../store/reducers/buy'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const favoriteItens = useSelector((state: RootState) => state.favorites.itens)
  const buyItens = useSelector((state: RootState) => state.buy.itens)
  const dispatch = useDispatch()

  const estaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoriteItens.map((f) => f.id)
    return IdsDosFavoritos.includes(produtoId)
  }

  const favoritar = (produto: ProdutoType) => {
    if (estaNosFavoritos(produto) === false) {
      dispatch(adicionar(produto))
    } else {
      dispatch(remover(produto))
    }
  }

  function aoComprar(produto: ProdutoType) {
    if (buyItens.find((p) => p.id === produto.id)) {
      alert('Item já adicionado')
    } else {
      dispatch(adicionarAoCarrinho(produto))
    }
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos(produto)
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => aoComprar(produto)} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
