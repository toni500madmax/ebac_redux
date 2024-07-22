import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contatos } from "../../contexts";

const api = createApi({
  reducerPath: "api_agenda_telefonica",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5050",
  }),
  endpoints: (builder) => ({
    getContatos: builder.query<Contatos[], void>({
      query: () => "/contato",
    }),
    getCategoria: builder.query<Contatos[], void>({
      query: () => "/categoria",
    }),
  }),
});

export const { useGetContatosQuery, useGetCategoriaQuery } = api;
export default api;
