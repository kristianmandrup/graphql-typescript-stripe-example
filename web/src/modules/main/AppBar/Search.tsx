import * as React from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core";

interface Props {
  classes: any;
}

export const Search = (props: Props) => {
  const { classes } = props;
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
      />
    </div>
  );
};

export default withStyles(styles)(Search);
