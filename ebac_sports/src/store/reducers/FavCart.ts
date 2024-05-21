import { createSlice } from '@reduxjs/toolkit'

type FavoritesCartState = {
  isVisible: boolean
}

const initialState: FavoritesCartState = {
  isVisible: false
}

const favState = createSlice({
  name: 'favoritesCart',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isVisible = true
    },
    toggleFalse: (state) => {
      state.isVisible = false
    }
  }
})

export const { toggle, toggleFalse } = favState.actions
export default favState.reducer
