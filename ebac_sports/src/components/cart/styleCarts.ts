import styled from 'styled-components'
import { cores } from '../../styles'

export const CartItemContainer = styled.div`
  width: 360px;
  height: 200vh;
  position: absolute;
  top: 10px;
  background-color: #fff;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  h1 {
    padding: 10px;
    width: 100%;
    text-align: center;
    color: #fff;
    background-image: linear-gradient(
      45deg,
      ${cores.corPrincipal},
      ${cores.corSecundaria}
    );
    border-radius: 8px;
  }
`

export const ProductItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 16px auto;

  img {
    width: 64px;
    height: 64px;
    margin-right: 6px;
    display: block;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h4 {
    font-size: 16px;
    margin-bottom: 8px;
  }
`
