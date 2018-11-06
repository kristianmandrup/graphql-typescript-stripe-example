import * as React from "react";
import LoginIcon from "@material-ui/icons/ExitToApp";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

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
