import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.DB_DATA}` }),
  tagTypes: ['movies'],
  endpoints: (builder) => ({}),
});
