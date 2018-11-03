import * as React from "react";
import { Button, IconButton, Toolbar, AppBar } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/SearchRounded";

const styles = theme => ({
  appBar: {
    top: "auto",
    bottom: 0
  }
});

interface Props {
  classes: any;
}

const BottomBar = ({ classes }: Props) => (
  <AppBar position="fixed" color="primary" className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <IconButton color="inherit" aria-label="Open drawer">
        <MenuIcon />
      </IconButton>
      <Button
        variant="fab"
        color="secondary"
        aria-label="Add"
        className={classes.fabButton}
      >
        <AddIcon />
      </Button>
      <div>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          <MoreIcon />
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
);

export const StyledBottomBar = withStyles(styles)(BottomBar);
