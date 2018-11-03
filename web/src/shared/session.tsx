import * as React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { LogoutView } from "../modules/user";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

interface Props {
  classes: any;
}

export const SessionControls = (props: Props) => {
  const { classes } = props;
  return (
    <>
      <Link to="/login">
        <Button variant="outlined" className={classes.button}>
          Login
        </Button>
      </Link>
      <Link to="/register">
        <Button variant="outlined" className={classes.button}>
          Register
        </Button>
      </Link>
    </>
  );
};

export const StyledSessionControls = withStyles(styles)(SessionControls);

export const NotLoggedIn = (data: any) => {
  console.log("notLoggedIn", { data });
  return !data.me ? <StyledSessionControls /> : null;
};

export const LoggedIn = withStyles(styles)((props: Props) => {
  const { classes } = props;
  return (
    <div>
      <Link to="/account">
        <Button variant="outlined" className={classes.button}>
          Account
        </Button>
      </Link>
      <LogoutView />
    </div>
  );
});
