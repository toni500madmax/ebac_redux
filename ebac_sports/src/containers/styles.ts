import styled from 'styled-components'

export const Produtos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const BuyContainer = styled.div`
  width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
  }
`
