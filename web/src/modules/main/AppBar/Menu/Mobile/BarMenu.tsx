import * as React from "react";
import Menu from "@material-ui/core/Menu";
import { NotificationsItem } from "./Notifications";
import { ProfileItem } from "./Profile";

interface Props {
  anchorEl: any;
  isMenuOpen: boolean;
  handleProfileMenuOpen: (e) => void;
  handleMenuClose: () => void;
}

export const BarMenu = ({
  anchorEl,
  isMenuOpen,
  handleMenuClose,
  handleProfileMenuOpen
}: Props) => (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    transformOrigin={{ vertical: "top", horizontal: "right" }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <NotificationsItem />
    <ProfileItem handleProfileMenuOpen={handleProfileMenuOpen} />
  </Menu>
);
