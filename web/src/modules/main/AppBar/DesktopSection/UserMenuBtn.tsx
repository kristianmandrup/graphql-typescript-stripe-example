import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import AccountIcon from "@material-ui/icons/AccountCircle";

export const UserMenuBtn = ({
  isLoggedIn,
  isMenuOpen,
  handleProfileMenuOpen
}: any) => {
  return !isLoggedIn ? null : (
    <IconButton
      aria-owns={isMenuOpen ? "material-appbar" : undefined}
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
    >
      <AccountIcon />
    </IconButton>
  );
};
