import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ContatoButtons from "../../containers/contatoButtons/contatoButtons";

export type ContatoProps = {
  contato: string[];
};

function Contato({ contato }: ContatoProps) {
  return (
    <List
      sx={{
        bgcolor: "#f2f2f2",
        padding: "0",
      }}
    >
      <ListItem disableGutters secondaryAction={<ContatoButtons />}>
        <ListItemText primary={`${contato}`} />
      </ListItem>
    </List>
  );
}

export default Contato;
