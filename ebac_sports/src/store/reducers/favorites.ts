import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritesState = {
  itens: Produto[]
}

const initialState: favoritesState = { itens: [] }

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      state.itens.push(action.payload)
    },
    remover: (state, action: PayloadAction<Produto>) => {
      state.itens.splice(state.itens.indexOf(action.payload), 1)
    }
  }
})

export const { adicionar, remover } = favoritesSlice.actions
export default favoritesSlice.reducer
