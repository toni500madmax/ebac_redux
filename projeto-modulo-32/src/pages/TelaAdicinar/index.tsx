import React from "react";
import { AdicionarContainer } from "./Style";
import {
  useGetContatosQuery,
  usePostContatoMutation,
} from "../../shared/services/api";
import { ReturnButton } from "../../shared/components/button/ReturnButton";

// ToDo: Criar o formulário, escolher form do react ou do material Ui

export const TelaAdicionarNovoContato = () => {
  const query = useGetContatosQuery();
  const { data: listaContatos } = query;

  const [postContato] = usePostContatoMutation();

  const contato = {
    id: 6,
    nome: "Lewis Howard",
    email: "Howlewie@email.com",
    telefone: "(33) 99456789",
    categoriaId: 1,
  };

  const addHandler = async () => {
    await postContato(contato);
  };

  return (
    <>
      <AdicionarContainer>
        <h1>Adicionar Novo Contato</h1>
        <p>Formulário para adicionar novo contato</p>
        {listaContatos?.map((contato) => (
          <p>{contato.nome}</p>
        ))}
        <button onClick={addHandler}>Adicionar</button>
      </AdicionarContainer>
      <ReturnButton />
    </>
  );
};
