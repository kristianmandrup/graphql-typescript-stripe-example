import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Link } from "react-router-dom";

export const DashboardBtn = ({ classes, isLoggedIn }: any) => {
  return !isLoggedIn ? null : (
    <Link to="/admin">
      <IconButton color="inherit">
        <DashboardIcon />
      </IconButton>
    </Link>
  );
};
