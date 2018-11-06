import * as React from "react";
import PersonIcon from "@material-ui/icons/ExitToApp";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

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
