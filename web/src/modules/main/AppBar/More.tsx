import * as React from "react";
import MoreIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";

export const More = ({ classes, handleMobileMenuOpen }: any) => (
  <div className={classes.sectionMobile}>
    <IconButton
      aria-haspopup="true"
      onClick={handleMobileMenuOpen}
      color="inherit"
    >
      <MoreIcon />
    </IconButton>
  </div>
);
