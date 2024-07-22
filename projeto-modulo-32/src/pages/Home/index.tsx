import * as React from "react";
import CardContato from "../../shared/components/contato/CardContato";
import { HomeContainer } from "./Style";

export const HomePage = () => {
  return (
    <HomeContainer>
      <h1>Contatos</h1>
      <CardContato />
    </HomeContainer>
  );
};
