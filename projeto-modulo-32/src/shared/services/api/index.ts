import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contatos } from "../../models";

const api = createApi({
  reducerPath: "api_agenda_telefonica",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5050",
  }),
  tagTypes: ["Contatos"],
  endpoints: (builder) => ({
    getContatos: builder.query<Contatos[], void>({
      query: () => "/contato",
    }),
    getCategoria: builder.query<Contatos[], void>({
      query: () => "/categoria",
    }),
    postContato: builder.mutation<Contatos[], void>({
      query: (novoContato) => ({
        url: `/contatos`,
        method: "POST",
        body: novoContato,
      }),
    }),
  }),
});

export const {
  useGetContatosQuery,
  useGetCategoriaQuery,
  usePostContatoMutation,
} = api;
export default api;
