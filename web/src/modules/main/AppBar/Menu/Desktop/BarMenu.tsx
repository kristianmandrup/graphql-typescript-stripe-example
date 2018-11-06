import * as React from "react";
import Menu from "@material-ui/core/Menu";
import { ProfileMenuItem } from "./Profile";
import { AccountMenuItem } from "./Account";
import { LogoutMenuItem } from "./Logout";

interface Props {
  isLoggedIn: boolean;
  anchorEl: any;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
}

export const BarMenu = ({
  anchorEl,
  isMenuOpen,
  handleMenuClose,
  isLoggedIn
}: Props) => {
  console.log("Desktop:TopBar", { isLoggedIn });
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
      <LogoutMenuItem {...props} />
    </Menu>
  );
};
