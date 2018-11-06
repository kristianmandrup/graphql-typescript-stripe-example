import * as React from "react";
import MoreIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";

export const MoreBtn = ({ classes, handleMobileMenuOpen }: any) => (
  <div className={classes.sectionMobile}>
    <IconButton
      aria-haspopup="true"
      onClick={handleMobileMenuOpen}
      color="inherit"
    >
      <MoreIcon />
    </IconButton>
    More
  </div>
);
