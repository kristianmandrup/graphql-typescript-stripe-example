import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import RegisterIcon from "@material-ui/icons/PersonAdd";
import { Link } from "react-router-dom";

export const RegisterBtn = ({ classes }: any) => (
  <Link to="/register">
    <IconButton color="inherit">
      <RegisterIcon />
    </IconButton>
  </Link>
);