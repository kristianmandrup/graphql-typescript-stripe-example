import * as React from "react";
import { Form } from "../Form";
import { Title } from "../../../../ui/Title";
import { updateProductMutation } from "./mutation";
import { useApolloMutation } from "react-apollo-hooks";

export const Update = () => {
  const mutate = useApolloMutation(updateProductMutation);
  return (
    <div>
      <Title>Update Product</Title>
      <Form mutate={mutate} />
    </div>
  );
};
