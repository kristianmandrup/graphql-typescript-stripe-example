import * as React from "react";
import AccountIcon from "@material-ui/icons/ExitToApp";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

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
