import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  margin: 80px 0;
  padding: 16px 24px;
  display: flex;
  border-radius: 6px;
  align-items: center;

  h1 {
    font-size: 18px;
    flex: 1;
    font-style: italic;
    color: ${cores.corFundo};
  }

  div {
    display: flex;
    align-items: center;

    span {
      color: ${cores.corFundo};
    }
  }

  .link {
    display: block;
    margin-right: 22px;
    margin-left: 22px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    div {
      margin-top: 16px;
    }
  }
`

export const FavButton = styled.button`
  padding: 4px;
  margin-inline: 6px;
  background-color: green;
  font-weight: bold;
  border-radius: 6px;

  &:hover {
    background-color: greenyellow;
  }
`

export const CartButton = styled.img`
  width: 26px;
  margin-right: 8px;
  margin-left: 16px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: green;
  border-radius: 10px;

  &:hover {
    background-color: greenyellow;
  }
`
