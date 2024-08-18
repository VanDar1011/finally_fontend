import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const edgeApi = createApi({
  reducerPath: "edgeApi",
  //   refetchOnFocus: true,
  //   refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  }),
  tagTypes: ["Edges"],
  endpoints: (builder) => ({
    getEdges: builder.query({
      query: () => `edges`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Edges", id })),
              { type: "Edges", id: "LIST" },
            ]
          : [{ type: "Edges", id: "LIST" }],
    }),
    addEdge: builder.mutation({
      query: (data) => ({
        url: `edges`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Edges", id: "LIST" }],
    }),
    deleteEdge: builder.mutation({
      query: (id) => ({
        url: `edges/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Edges", id: "LIST" }],
    }),
    updateEdge: builder.mutation({
      query: (data) => ({
        url: `edges/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [{ type: "Edges", id: "LIST" }],
    }),
  }),
});
