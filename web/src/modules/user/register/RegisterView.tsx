import * as React from "react";
import { useApolloMutation } from "react-apollo-hooks";
import { registerMutation } from "./mutation";
import { CredentialsForm } from "../form";

export default ({ history }: any) => {
  const register = useApolloMutation(registerMutation);
  const props = { history, mutate: register, redirect: "/" };
  return <CredentialsForm {...props} />;
};
