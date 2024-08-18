import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const nodeApi = createApi({
  reducerPath: "nodeApi",
  //   refetchOnFocus: true,
  //   refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  }),
  tagTypes: ["Nodes"],
  endpoints: (builder) => ({
    getNodes: builder.query({
      query: (name) => `nodes`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Nodes", id })),
              { type: "Nodes", id: "LIST" },
            ]
          : [{ type: "Nodes", id: "LIST" }],
    }),
    addNode: builder.mutation({
      query: (data) => ({
        url: `nodes`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Nodes", id: "LIST" }],
    }),
    deleteNode: builder.mutation({
      query: (id) => ({
        url: `nodes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Nodes", id: "LIST" }],
    }),
    updateNode: builder.mutation({
      query: (data) => ({
        url: `nodes/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [{ type: "Nodes", id: "LIST" }],
    }),
  }),
});
