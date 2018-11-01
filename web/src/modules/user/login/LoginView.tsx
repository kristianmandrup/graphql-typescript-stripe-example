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

    cache.writeQuery({
      query: meQuery,
      data: { me: data.login }
    });
  };
};

export default ({ history }: any) => {
  const mutate = useApolloMutation(loginMutation);
  const props = { history, update, mutate, buttonText: "login", redirect: "/" };
  return <CredentialsForm {...props} />;
};
