import * as React from "react";
import Menu from "@material-ui/core/Menu";
import { ProfileMenuItem } from "./Profile";
import { LoggedInMenuItem } from "./LoggedIn";
import { AccountMenuItem } from "./Account";
import { LogoutMenuItem } from "./Logout";

interface Props {
  isLoggedIn: boolean;
  anchorEl: any;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
}

export const TopBar = ({
  anchorEl,
  isMenuOpen,
  handleMenuClose,
  isLoggedIn
}: Props) => {
  const props = { handleMenuClose, isLoggedIn };
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <ProfileMenuItem {...props} />
      <AccountMenuItem {...props} />
      <LoggedInMenuItem {...props} />
      <LogoutMenuItem {...props} />
    </Menu>
  );
};
