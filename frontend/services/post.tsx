import CardData from '@/types/Post'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337' }),
  endpoints: (builder) => ({
    getCard: builder.query<CardData, "">({
      query: () => `/api/events?populate[EventCard][populate][image][populate]=true&populate[EventCard][populate][image][fields][0]=name&populate[EventCard][populate][image][fields][1]=alternativeText&populate[EventCard][populate][image][fields][2]=url&populate[EventCard][populate][image_more][populate]=true&populate[EventCard][populate][image_more][fields][0]=name&populate[EventCard][populate][image_more][fields][1]=alternativeText&populate[EventCard][populate][image_more][fields][2]=url`,
    }),
  }),
})

export const { useGetCardQuery } = cardApi