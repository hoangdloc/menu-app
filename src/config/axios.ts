import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = {
      baseUrl: 'https://642310c2001cb9fc203747d8.mockapi.io'
    }
  ): BaseQueryFn<
  {
    url: string
    method: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
  },
  unknown,
  unknown
  > =>
    async ({ url, method, data, params }) => {
      try {
        const result = await axios({ url: baseUrl + url, method, data, params });
        return { data: result.data };
      } catch (axiosError) {
        const err = axiosError as AxiosError;
        return {
          error: {
            status: err.response?.status,
            data: Boolean(err.response?.data) || err.message
          }
        };
      }
    };
