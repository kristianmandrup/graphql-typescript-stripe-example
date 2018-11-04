import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export const DrawerBtn = ({ classes }: any) => (
  <IconButton
    className={classes.menuButton}
    color="inherit"
    aria-label="Open drawer"
  >
    <MenuIcon />
  </IconButton>
);
