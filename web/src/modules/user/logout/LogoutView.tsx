import * as React from "react";
import { meQuery } from "../../../graphql/queries/me";
import { useApolloMutation, useApolloClient } from "react-apollo-hooks";
import { logoutMutation } from "./mutation";
import { withRouter } from "react-router";

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
  console.log("logout", { data });
  client.resetStore();
  const response = await mutate({
    variables: data
  });
  console.log("logged out", { response, redirect });
  history.push(redirect);
};

const LogoutView = ({ history }: any) => {
  const client = useApolloClient();
  const mutate = useApolloMutation(logoutMutation, { update });
  const props = { client, history, mutate, redirect: "/" };
  return <span onClick={async () => await logout(props)}>logout</span>;
};

export default withRouter(LogoutView);
