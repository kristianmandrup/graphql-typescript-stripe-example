import * as React from "react";
import { useApolloMutation } from "react-apollo-hooks";
import { meQuery } from "../../../graphql/queries/me";
import { CredentialsForm } from "../form";
import { loginMutation } from "./mutation";

const update = () => {
  return (cache: any, { data }: any) => {
    if (!data || !data.login) {
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
  const mutate = useApolloMutation(loginMutation, { update });
  const props = { history, mutate, buttonText: "login", redirect: "/" };
  return <CredentialsForm {...props} />;
};
