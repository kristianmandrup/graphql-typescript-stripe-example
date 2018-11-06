import * as React from "react";
import { useApolloMutation } from "react-apollo-hooks";
import { registerMutation } from "./mutation";
import { CredentialsForm } from "../../../user/form";

export const Create = ({ history }: any) => {
  const register = useApolloMutation(registerMutation);
  const props = {
    history,
    mutate: register,
    buttonText: "register",
    redirect: "/"
  };
  return <CredentialsForm {...props} />;
};
