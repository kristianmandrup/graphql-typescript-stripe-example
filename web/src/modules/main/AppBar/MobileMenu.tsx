import * as React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";

interface Props {
  anchorEl: any;
  isMenuOpen: boolean;
  handleProfileMenuOpen: (e) => void;
  handleMenuClose: () => void;
}

export const TopBarMobileMenu = ({
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
    <MenuItem>
      <IconButton color="inherit">
        <Badge badgeContent={11} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <p>Notifications</p>
    </MenuItem>
    <MenuItem onClick={handleProfileMenuOpen}>
      <IconButton color="inherit">
        <PersonIcon />
      </IconButton>
      <p>Profile</p>
    </MenuItem>
  </Menu>
);
