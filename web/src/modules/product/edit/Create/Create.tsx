import * as React from "react";
import { Form } from "../Form";
import { Title } from "../../../../ui/Title";
import { createProductMutation } from "./mutation";
import { useApolloMutation } from "react-apollo-hooks";

export const Create = () => {
  const mutate = useApolloMutation(createProductMutation);
  return (
    <div>
      <Title>Create product</Title>
      <Form mutate={mutate} />
    </div>
  );
};
