import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PlayersPayloadType } from "./types";

export const playersApiSlice = createApi({
  reducerPath: 'playersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ['allPlayers'],
  endpoints: ((builder) => ({
    getAllPlayers: builder.query({
      query: () => ({
        url: 'players',
        method: 'GET',
      }),
      providesTags: ['allPlayers']
    }),

    addPlayer: builder.mutation({
      query: (payload: PlayersPayloadType) => ({
        url: 'players',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['allPlayers']
    }),
  }))
})

export const { useGetAllPlayersQuery, useAddPlayerMutation } = playersApiSlice;