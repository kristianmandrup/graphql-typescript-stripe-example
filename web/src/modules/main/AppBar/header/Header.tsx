import * as React from "react";
import { Link } from "react-router-dom";
import { meQuery } from "../../../../graphql/queries/me";
import { useApolloQuery } from "react-apollo-hooks";
import { headerStyle } from "./style";
import { NotLoggedIn, LoggedIn } from "./session";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const SessionDisplay = ({ data, loading }: any) => {
  if (loading || !data) {
    return null;
  }
  return <NotLoggedIn data={data} /> || <LoggedIn />;
};

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

interface Props {
  classes: any;
}

export const Header = (props: Props) => {
  const { classes } = props;
  const result = useApolloQuery(meQuery);
  const { error } = result;
  if (error) {
    return <div className="error">Error: ${JSON.stringify(error)}</div>;
  }
  return (
    <div style={{ ...headerStyle }}>
      <Link to="/admin">
        <Button variant="outlined" className={classes.button}>
          Admin
        </Button>
      </Link>
      <SessionDisplay {...result} />
    </div>
  );
};

export const StyledHeader = withStyles(styles)(Header);
