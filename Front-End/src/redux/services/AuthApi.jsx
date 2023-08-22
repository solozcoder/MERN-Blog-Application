import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const AuthApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: (obj) => ({
        url: "/signin",
        method: "POST",
        body: obj,
        credentials: "include",
      }),
    }),
    logout: build.mutation({
      query: (obj) => ({
        url: "/signout",
        method: "POST",
        body: obj,
        credentials: "include",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = AuthApi;
