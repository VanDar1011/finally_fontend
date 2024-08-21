import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const mindmapApi = createApi({
  reducerPath: "mindmapApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  }),
  tagTypes: ["MindMap"],
  endpoints: (builder) => ({
    getMindMaps: builder.query({
      query: () => `/users`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "MindMap", id })),
              { type: "MindMap", id: "LIST" },
            ]
          : [{ type: "MindMap", id: "LIST" }],
    }),
    getMindMapById: builder.query({
      query: (id) => `/users/${id}`,
      // providesTags: (result) => result && [{ type: "MindMap", id: "LIST" }],
      providesTags: (result) =>
        result && Object.keys(result).length > 0
          ? [{ type: "MindMap", id: "LIST" }]
          : [{ type: "MindMap", id: "NOT_FOUND" }],
    }),
    updateMindMapById: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: [{ type: "MindMap", id: "LIST" }],
    }),
  }),
});
