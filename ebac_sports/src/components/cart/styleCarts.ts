import styled from 'styled-components'
import { cores } from '../../styles'

type ContainerType = {
  containerType: 'favorites' | ''
}

export const CartItemContainer = styled.div<ContainerType>`
  width: 360px;
  height: 200vh;
  position: absolute;
  top: 10px;
  ${(props) => (props.containerType === 'favorites' ? 'left: 0;' : '')};
  ${(props) =>
    props.containerType === 'favorites' ? 'background-color: #fff;' : ''};

  ${(props) =>
    props.containerType === 'favorites'
      ? 'border-right: 2px solid black;'
      : ''};
  border-bottom: 2px solid black;
  border-top: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  h1 {
    ${(props) =>
      props.containerType === 'favorites'
        ? `color: #fff; background-image: linear-gradient(
      45deg,
      ${cores.corPrincipal},
      ${cores.corSecundaria}
    );`
        : `color: ${cores.corSecundaria}; background-color: #fff;`};
    ${(props) => (props.containerType === 'favorites' ? '' : '')};
    ${(props) => (props.containerType === 'favorites' ? '' : '')};
    padding: 10px;
    width: 100%;
    text-align: center;
    border-radius: 8px;
  }

  aside {
    width: 100%;

    p {
      display: flex;
      justify-content: end;
      padding: 1px;
      color: red;
      cursor: pointer;

      &:hover {
        color: #d09090;
      }
    }
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
