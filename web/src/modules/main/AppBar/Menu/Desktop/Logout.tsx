import * as React from "react";
import LogoutIcon from "@material-ui/icons/PowerSettingsNew";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import { LogoutView } from "../../../../user/session/logout/LogoutView";

export const LogoutMenuItem = ({ handleMenuClose, isLoggedIn }: any) => {
  console.log("login", { isLoggedIn });
  return !isLoggedIn ? null : (
    <MenuItem onClick={handleMenuClose}>
      <IconButton color="inherit">
        <LogoutIcon />
      </IconButton>
      <LogoutView />
    </MenuItem>
  );
};
