import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuButton } from "../../components/menu/MenuButton";
import { Header, TextTitle } from "./Style";

// ToDo: Melhorar a apresentação da header.

export const HeaderContainer = () => {
  return (
    <Header>
      <MenuButton
        children={<MenuIcon key={Number.MIN_VALUE} />}
        linkList={[
          { nome: "Novo Contato", to: "./adicionarContato" },
          { nome: "Link 2", to: "/" },
          { nome: "Link 3", to: "/" },
        ]}
      />
      <TextTitle>App Agenda Telefônica</TextTitle>
    </Header>
  );
};
