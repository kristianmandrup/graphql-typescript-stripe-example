import * as React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";

export const NotificationsItem = () => (
  <MenuItem>
    <IconButton color="inherit">
      <Badge badgeContent={11} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
    <p>Notifications</p>
  </MenuItem>
);
