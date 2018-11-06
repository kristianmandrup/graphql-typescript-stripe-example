import * as React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { PaidUsers, Account, RegisterCustomer } from "../";
import { Admin } from "./Admin";
import { AppBar } from "./AppBar";
import { LoginView } from "../user";
// import { StyledBottomBar } from "./BottomBar";
import { meQuery } from "../../graphql/queries/me";
import { useApolloQuery } from "react-apollo-hooks";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

export const MainContent = (props: any) => {
  const result = useApolloQuery(meQuery);
  const { data, error } = result;
  const loggedIn = Boolean(data.me);
  if (error) {
    return <div className="error">Error: ${JSON.stringify(error)}</div>;
  }
  return (
    <>
      <AppBar {...props} loggedIn={loggedIn} />
      <div className="content">
        <Route path="/register" component={RegisterCustomer} />
        <Route path="/login" component={LoginView} />
        <Route path="/account" component={Account} />
        <Route path="/admin" component={Admin} />
        <Route path="/paid-users" component={PaidUsers} />
        <Route exact={true} path="/" component={Home} />
      </div>
    </>
  );
};

export const Main = withStyles(styles)(MainContent);
