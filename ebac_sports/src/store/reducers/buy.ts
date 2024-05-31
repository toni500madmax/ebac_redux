import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type buyState = {
  itens: Produto[]
}

const initialState: buyState = {
  itens: []
}

const buySlice = createSlice({
  name: 'buy',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      state.itens.push(action.payload)
    }
  }
})

export const { adicionarAoCarrinho } = buySlice.actions
export default buySlice.reducer
