import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { LogoutView } from "../../../modules/user";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

export const LoginBtn = ({ classes }: any) => (
  <Link to="/login">
    <Button variant="outlined" className={classes.button}>
      Login
    </Button>
  </Link>
);

export const RegisterBtn = ({ classes }: any) => (
  <Link to="/register">
    <Button variant="outlined" className={classes.button}>
      Register
    </Button>
  </Link>
);

export const GuestSessionControls = ({ classes }: any) => (
  <>
    <LoginBtn classes={classes} />
    <RegisterBtn classes={classes} />
  </>
);

export const StyledSessionControls = withStyles(styles)(GuestSessionControls);

export const NotLoggedIn = (data: any) => {
  console.log("notLoggedIn", { data });
  return !data.me ? <StyledSessionControls /> : null;
};

export const LoggedIn = withStyles(styles)(({ classes }: any) => (
  <>
    <LogoutView />
  </>
));
