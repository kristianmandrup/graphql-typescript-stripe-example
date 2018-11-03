import * as React from "react";
import { meQuery } from "../../../graphql/queries/me";
import { useApolloMutation, useApolloClient } from "react-apollo-hooks";
import { logoutMutation } from "./mutation";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { compose } from "recompose";

const update = () => {
  return (cache: any, { data }: any) => {
    if (!data || !data.login) {
      return;
    }
    console.log("update: logout clear me");

    cache.writeQuery({
      query: meQuery,
      data: { me: null }
    });
  };
};

const logout = async ({ client, history, mutate, data, redirect }: any) => {
  client.resetStore();
  await mutate({
    variables: data
  });
  history.push(redirect);
};

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

interface Props {
  classes: any;
  history: any;
}

const LogoutView = (props: Props) => {
  const { history, classes } = props;
  const client = useApolloClient();
  const mutate = useApolloMutation(logoutMutation, { update });
  const options = { client, history, mutate, redirect: "/" };
  return (
    <Button
      variant="outlined"
      className={classes.button}
      onClick={async () => await logout(options)}
    >
      Logout
    </Button>
  );
};

const StyledLogoutView = compose(
  withRouter,
  withStyles(styles)
)(LogoutView);
export default StyledLogoutView;
