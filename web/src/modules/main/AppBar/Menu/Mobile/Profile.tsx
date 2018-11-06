import * as React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";

export const ProfileItem = ({ handleProfileMenuOpen }: any) => (
  <MenuItem onClick={handleProfileMenuOpen}>
    <IconButton color="inherit">
      <PersonIcon />
    </IconButton>
    <p>Profile</p>
  </MenuItem>
);
