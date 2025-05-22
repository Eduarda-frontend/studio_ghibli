import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type Filme  from '../models/Filme';

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://ghibliapi.vercel.app'
    }),
    endpoints: (builder) => ({
        getFilmes: builder.query<Filme[], void>({
            query: () => 'films'
        })
    })
})

export const { useGetFilmesQuery } = api
export default api