import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetShifts, IGetShiftsParams } from '../../src/types/responses';

export const shiftsApi = createApi({
  reducerPath: 'shiftsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mobile.handswork.pro/api/' }),
  endpoints: builder => ({
    getShifts: builder.query<IGetShifts, IGetShiftsParams>({
      query: ({ latitude, longitude }) =>
        `shifts/map-list-unauthorized?latitude=${latitude}&longitude=${longitude}`,
    }),
  }),
});

export const { useGetShiftsQuery } = shiftsApi;
