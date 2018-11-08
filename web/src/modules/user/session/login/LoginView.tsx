import * as React from "react";
import { useApolloMutation, useApolloClient } from "react-apollo-hooks";
import { meQuery } from "../../queries";
import { CredentialsForm } from "../../form";
import { loginMutation } from "./mutation";

const update = () => {
  return (cache: any, { data }: any) => {
    if (!data || !data.login) {
      console.log("missing data for login");
      return;
    }
    const { login } = data;
    console.log("update: login add me to query cache", { login });
    cache.writeQuery({
      query: meQuery,
      data: { me: login }
    });
  };
};

export default ({ history }: any) => {
  const client = useApolloClient();
  const mutate = useApolloMutation(loginMutation, { update });
  const props = { client, history, mutate, buttonText: "login", redirect: "/" };
  return <CredentialsForm {...props} />;
};
