import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";

function Contato() {
  return (
    <List
      sx={{
        bgcolor: "#f2f2f2",
        padding: "0",
      }}
    >
      <ListItem
        disableGutters
        secondaryAction={
          <IconButton aria-label="comment">
            <CommentIcon />
          </IconButton>
        }
      >
        <ListItemText primary={`Line item 1`} />
      </ListItem>
    </List>
  );
}

export default Contato;
