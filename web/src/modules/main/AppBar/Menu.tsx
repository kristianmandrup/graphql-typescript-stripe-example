import * as React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import AccountIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import LoginIcon from "@material-ui/icons/ExitToApp";
import LogoutIcon from "@material-ui/icons/PowerSettingsNew";
import { LogoutView } from "../../user/session/logout/LogoutView";

interface Props {
  anchorEl: any;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
}

export const TopBarMenu = ({
  anchorEl,
  isMenuOpen,
  handleMenuClose
}: Props) => (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    transformOrigin={{ vertical: "top", horizontal: "right" }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={handleMenuClose}>
      <Link to="/profile">
        <IconButton color="inherit">
          <PersonIcon />
        </IconButton>
        Profile
      </Link>
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <Link to="/account">
        <IconButton color="inherit">
          <AccountIcon />
        </IconButton>
        Account
      </Link>
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <Link to="/login">
        <IconButton color="inherit">
          <LoginIcon />
        </IconButton>
        Login
      </Link>
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <IconButton color="inherit">
        <LogoutIcon />
      </IconButton>
      <LogoutView />
    </MenuItem>
  </Menu>
);
