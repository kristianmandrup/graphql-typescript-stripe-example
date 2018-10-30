import * as React from "react";
import { meQuery } from "../../../graphql/queries/me";
import { useApolloMutation, useApolloClient } from "react-apollo-hooks";
import { logoutMutation } from "./mutation";

const update = () => {
  return (cache: any, { data }: any) => {
    if (!data || !data.login) {
      return;
    }

    cache.writeQuery({
      query: meQuery,
      data: { me: null }
    });
  };
};

const logout = async ({ client, history, mutate, data, redirect }: any) => {
  const response = await mutate({
    variables: data
  });
  client.resetStore();
  console.log(response);
  history.push(redirect);
};

export default ({ history }: any) => {
  const client = useApolloClient();
  const mutate = useApolloMutation(logoutMutation, { update });
  const props = { client, history, mutate, redirect: "/" };
  return <button onClick={async () => await logout(props)} />;
};
