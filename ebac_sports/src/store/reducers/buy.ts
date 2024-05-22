import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type buyState = {
  itens: Produto[]
  isVisible: boolean
}

const initialState: buyState = {
  itens: [],
  isVisible: false
}

const buySlice = createSlice({
  name: 'buy',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      state.itens.push(action.payload)
    },
    openCart: (state) => {
      state.isVisible = true
    },
    closeCart: (state) => {
      state.isVisible = false
    }
  }
})

export const { adicionarAoCarrinho, openCart, closeCart } = buySlice.actions
export default buySlice.reducer
