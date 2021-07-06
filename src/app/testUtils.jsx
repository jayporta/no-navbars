import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { timesBestSellersApi } from 'app/_services/timesBestSellersApiService'
import themeReducer from 'app/_store/theme/themeSlice'

function render (
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        theme: themeReducer,
        [timesBestSellersApi.reducerPath]: timesBestSellersApi.reducer
      },
      middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(timesBestSellersApi.middleware)
      ),
      preloadedState
    }),
    ...renderOptions
  } = {}
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper ({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
