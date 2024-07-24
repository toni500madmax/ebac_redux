import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contatos } from "../../models";

// ToDo: Criar métodos de editar e de deletar.

const api = createApi({
  reducerPath: "api_agenda_telefonica",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5050",
  }),
  tagTypes: ["Contatos"],
  endpoints: (builder) => ({
    getContatos: builder.query<Contatos[], void>({
      query: () => "/contato",
      providesTags: ["Contatos"],
    }),
    getCategoria: builder.query<Contatos[], void>({
      query: () => "/categoria",
      providesTags: ["Contatos"],
    }),
    postContato: builder.mutation<void, Contatos>({
      query: (novoContato) => ({
        url: `/contatos`,
        method: "POST",
        body: novoContato,
      }),
      invalidatesTags: ["Contatos"],
    }),
    updadeContato: builder.mutation<void, Contatos>({
      query: ({ id, ...rest }) => ({
        url: `/contatos/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Contatos"],
    }),
    deleteContato: builder.mutation<void, string>({
      query: (id) => ({
        url: `/contatos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contatos"],
    }),
  }),
});

export const {
  useGetContatosQuery,
  useGetCategoriaQuery,
  usePostContatoMutation,
  useUpdadeContatoMutation,
  useDeleteContatoMutation,
} = api;
export default api;
