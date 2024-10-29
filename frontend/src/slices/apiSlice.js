//Parent for APIs
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../constants';

//This means that all API requests will start with this baseUrl,
//allowing specific endpoints to be defined relative to this base.
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Product', 'Order', 'User'], //These tags are used for caching and automatically invalidating data in the store.
  endpoints: (builder) => ({}),
});
