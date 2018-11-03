import { createStyles, Theme } from "@material-ui/core/styles";
export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: 250
    },
    container: {
      flexGrow: 1,
      position: "relative"
    },
    paper: {
      position: "absolute",
      zIndex: 1,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0
    },
    chip: {
      margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
    },
    inputRoot: {
      flexWrap: "wrap"
    },
    inputInput: {
      width: "auto",
      flexGrow: 1
    },
    divider: {
      height: theme.spacing.unit * 2
    }
  });
