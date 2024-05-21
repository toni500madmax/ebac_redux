import { configureStore } from '@reduxjs/toolkit'

import favoritesReducer from './reducers/favorites'
import buyReducer from './reducers/buy'
import favStateReducer from './reducers/FavCart'

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    buy: buyReducer,
    favoritesCart: favStateReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store
