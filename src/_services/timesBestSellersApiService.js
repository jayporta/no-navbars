import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const { REACT_APP_NYT_KEY } = process.env

export const timesBestSellersApi = createApi({
  reducerPath: 'timesBestSellersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nytimes.com/svc/books/v3/'
  }),
  endpoints: (builder) => ({
    getTimesBestSellers: builder.query({
      query: () => `lists/current/hardcover-fiction.json?api-key=${REACT_APP_NYT_KEY}`
    })
  })
})

export const { useGetTimesBestSellersQuery } = timesBestSellersApi
