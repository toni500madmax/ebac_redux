import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuButton } from "../../components/menu/MenuButton";
import { Header, TextTitle } from "./Style";

export const HeaderContainer = () => {
  return (
    <Header>
      <MenuButton
        children={<MenuIcon key={Number.MIN_VALUE} />}
        linkList={["Link 1", "Link 2", "Link 3"]}
      />
      <TextTitle>App Agenda Telefônica</TextTitle>
    </Header>
  );
};
