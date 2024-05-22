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
    openFav: (state) => {
      state.isVisible = true
    },
    closeFav: (state) => {
      state.isVisible = false
    }
  }
})

export const { openFav, closeFav } = favState.actions
export default favState.reducer
