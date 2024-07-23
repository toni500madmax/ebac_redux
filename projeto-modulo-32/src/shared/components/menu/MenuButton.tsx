import * as React from "react";
import Menu from "@mui/material/Menu";
import { IconButton, MenuItem } from "@mui/material";
import { Link, To } from "react-router-dom";

export type linkList = {
  children: React.ReactNode;
  linkList: [
    {
      nome: string;
      to: string;
    },
    {
      nome: string;
      to: string;
    },
    {
      nome: string;
      to: string;
    }
  ];
};

export const MenuButton = ({ children, linkList }: linkList) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
        size="large"
        sx={{ ml: 0, mr: 0 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {children}
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {Array.isArray(linkList) &&
          linkList.map((link: { to: To; nome: string }) => (
            <MenuItem key={Number.MIN_VALUE} onClick={handleClose}>
              <Link to={link.to}>{link.nome}</Link>
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
};
