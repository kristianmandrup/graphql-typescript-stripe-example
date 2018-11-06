import * as React from "react";
import LoginIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

export const LoginBtn = ({ handleMenuClose, isLoggedIn }: any) => {
  console.log("login", { isLoggedIn });
  return isLoggedIn ? null : (
    <Link to="/login" className="link">
      <IconButton color="inherit">
        <LoginIcon />
      </IconButton>
    </Link>
  );
};
