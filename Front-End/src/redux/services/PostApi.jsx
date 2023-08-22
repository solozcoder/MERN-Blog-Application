import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const PostApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getContent: build.query(),
    postContent: build.mutation({
      query: (obj) => ({
        url: "/api/post",
        method: "POST",
        body: obj,
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetContentQuery, usePostContentMutation } = PostApi;
