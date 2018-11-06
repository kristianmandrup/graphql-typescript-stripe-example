import * as React from "react";
import { Form } from "../Form";
import { Title } from "../../../../ui/Title";
import { updatePlanMutation } from "./mutation";
import { useApolloMutation } from "react-apollo-hooks";

export const Update = () => {
  const mutate = useApolloMutation(updatePlanMutation);
  return (
    <div>
      <Title>Update plan</Title>
      <Form mutate={mutate} />
    </div>
  );
};
