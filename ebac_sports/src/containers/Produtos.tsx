import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const query = useGetProdutosQuery()
  const { data: produtos } = query

  return (
    <>
      {query.isLoading && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
