import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { imdbApi } from './imdb/imdbApiService'
import themeReducer from './theme/themeSlice'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    [imdbApi.reducerPath]: imdbApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(imdbApi.middleware)
})

setupListeners(store.dispatch)

export default store
