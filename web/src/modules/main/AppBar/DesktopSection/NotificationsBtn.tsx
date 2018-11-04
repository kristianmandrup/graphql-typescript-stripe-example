import * as React from "react";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";

export const NotificationsBtn = ({ isLoggedIn }: any) => {
  return !isLoggedIn ? null : (
    <Link to="/notifications">
      <IconButton color="inherit">
        <Badge badgeContent={3} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};
