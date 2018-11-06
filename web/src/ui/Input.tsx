import * as React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import { InputAdornment, IconButton, InputLabel } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 200
    }
  });

export const TextInput = ({
  name,
  key,
  type,
  label,
  placeholder,
  value,
  handleChange,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!!showPassword);

  const endAdornment =
    type === "password" ? (
      undefined
    ) : (
      <InputAdornment position="end">
        <IconButton
          aria-label="Toggle password visibility"
          onClick={handleClickShowPassword}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    );

  const { classes } = props;
  return (
    <div>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        id={name}
        type={type}
        className={classes.textField}
        value={value}
        onChange={handleChange}
        margin="normal"
        endAdornment={endAdornment}
      />
    </div>
  );
};

export const Input = withStyles(styles)(TextInput);
