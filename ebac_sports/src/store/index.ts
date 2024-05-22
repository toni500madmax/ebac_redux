import { configureStore } from '@reduxjs/toolkit'

import favoritesReducer from './reducers/favorites'
import buyReducer from './reducers/buy'
import favStateReducer from './reducers/FavCart'
import api from '../services/api'

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    buy: buyReducer,
    favoritesCart: favStateReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export default store
