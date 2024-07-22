import React from "react";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { ContatoButtonsContainer } from "./Style";
import { Link } from "react-router-dom";

function ContatoButtons() {
  return (
    <ContatoButtonsContainer>
      <Link to={"/"}>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
      </Link>
      <Link to={"/"}>
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
      </Link>
    </ContatoButtonsContainer>
  );
}

export default ContatoButtons;
