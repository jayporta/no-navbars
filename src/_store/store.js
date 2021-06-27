import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { timesBestSellersApi } from '../_services/timesBestSellersApiService'
import themeReducer from './theme/themeSlice'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    [timesBestSellersApi.reducerPath]: timesBestSellersApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(timesBestSellersApi.middleware)
})

setupListeners(store.dispatch)

export default store
