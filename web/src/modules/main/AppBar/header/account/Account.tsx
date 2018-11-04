import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

export const AccountBtn = ({ classes }: any) => (
  <Link to="/account">
    <Button variant="outlined" className={classes.button}>
      Account
    </Button>
  </Link>
);

export const Profile = withStyles(styles)(({ classes }: any) => (
  <>
    <AccountBtn />
  </>
));
