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
  isLoggedIn: boolean;
  anchorEl: any;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
}

export const LoggedInMenuItem = ({ handleMenuClose, isLoggedIn }: any) => {
  return isLoggedIn ? null : (
    <MenuItem onClick={handleMenuClose}>
      <Link to="/login">
        <IconButton color="inherit">
          <LoginIcon />
        </IconButton>
        Login
      </Link>
    </MenuItem>
  );
};

export const ProfileMenuItem = ({ handleMenuClose, isLoggedIn }: any) => {
  return !isLoggedIn ? null : (
    <MenuItem onClick={handleMenuClose}>
      <Link to="/profile">
        <IconButton color="inherit">
          <PersonIcon />
        </IconButton>
        Profile
      </Link>
    </MenuItem>
  );
};

export const AccountMenuItem = ({ handleMenuClose, isLoggedIn }: any) => {
  return !isLoggedIn ? null : (
    <MenuItem onClick={handleMenuClose}>
      <Link to="/account">
        <IconButton color="inherit">
          <AccountIcon />
        </IconButton>
        Account
      </Link>
    </MenuItem>
  );
};

export const LogoutMenuItem = ({ handleMenuClose, isLoggedIn }: any) => {
  return !isLoggedIn ? null : (
    <MenuItem onClick={handleMenuClose}>
      <IconButton color="inherit">
        <LogoutIcon />
      </IconButton>
      <LogoutView />
    </MenuItem>
  );
};

export const TopBarMenu = ({
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
