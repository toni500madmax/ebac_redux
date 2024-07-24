import React from "react";
import { AdicionarContainer } from "./Style";
import {
  useDeleteContatoMutation,
  useGetContatosQuery,
  usePostContatoMutation,
  useUpdadeContatoMutation,
} from "../../shared/services/api";
import { ReturnButton } from "../../shared/components/button/ReturnButton";

// ToDo: Criar o formulário, escolher form do react ou do material Ui

export const TelaAdicionarNovoContato = () => {
  const query = useGetContatosQuery();
  const { data: listaContatos } = query;

  const [postContato] = usePostContatoMutation();
  const [updateContato] = useUpdadeContatoMutation();


  const contato = {
    id: 6,
    nome: "Lewis Howard",
    email: "Howlewie@email.com",
    telefone: ["(33) 99456789"],
    categoriaId: 1,
  };

  const toUpdateContato = {
    id: 5,
    nome: "Erik Dos Santos",
    email: "erikWag@Gmail.com",
    telefone: ["(42) 123456789", "(41) 123456789"],
    categoriaId: 3,
  };

  const addHandler = async () => {
    await postContato(contato);
  };

  const updateHandler = async () => {
    await updateContato(toUpdateContato);
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
        <button onClick={updateHandler}>Atualizar</button>
        
      </AdicionarContainer>
      <ReturnButton />
    </>
  );
};
