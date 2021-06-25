import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const imdbApi = createApi({
  reducerPath: 'imdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://imdb8.p.rapidapi.com/auto-complete' }),
  endpoints: (builder) => ({
    getImdbData: builder.query({
      query: (query) => `q/${query}`
    })
  })
})

export const { useGetImdbDataQuery } = imdbApi
