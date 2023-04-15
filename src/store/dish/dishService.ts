/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '../../config/axios';
import { Dish } from '../../shared/@types/dish';

export const dishApi = createApi({
  reducerPath: 'dishApi',
  tagTypes: ['Dishes'],
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    fetchDishes: builder.query<Dish[], void>({
      query: () => ({ url: '/dishes', method: 'get' }),
      providesTags: (result) => {
        if (result != null) {
          const final = [
            ...result.map(({ id }) => ({ type: 'Dishes' as const, id })),
            { type: 'Dishes' as const, id: 'LIST' }
          ];
          return final;
        }
        return [{ type: 'Dishes', id: 'LIST' }];
      }
    })
  })
});

export const { useFetchDishesQuery } = dishApi;
