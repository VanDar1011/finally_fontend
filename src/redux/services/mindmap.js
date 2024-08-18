import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const mindmapApi = createApi({
  reducerPath: "mindmapApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  }),
  tagTypes: ["MindMap"],
  endpoints: (builder) => ({
    getMindMaps: builder.query({
      query: () => `users`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "MindMap", id })),
              { type: "MindMap", id: "LIST" },
            ]
          : [{ type: "MindMap", id: "LIST" }],
    }),
    getMindMapById: builder.query({
      query: (id) => `users?id=${id}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "MindMap", id })),
              { type: "MindMap", id: "LIST" },
            ]
          : [{ type: "MindMap", id: "LIST" }],
    }),
  }),
});
