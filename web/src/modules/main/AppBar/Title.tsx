import * as React from "react";
import Typography from "@material-ui/core/Typography";

export const Title = ({ classes }: any) => (
  <Typography
    className={classes.title}
    variant="h6"
    color="inherit"
    noWrap={true}
  >
    Web service shop
  </Typography>
);
