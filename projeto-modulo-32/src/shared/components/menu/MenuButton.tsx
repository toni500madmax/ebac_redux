import * as React from "react";
import Menu from "@mui/material/Menu";
import { IconButton, MenuItem } from "@mui/material";

export interface MenuButtonProps {
  children: React.ReactNode;
  linkList: string[] | string | null;
}

export const MenuButton = ({ children, linkList }: MenuButtonProps) => {
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
          linkList.map((link: string) => (
            <MenuItem onClick={handleClose}>{link}</MenuItem>
          ))}
      </Menu>
    </div>
  );
};
