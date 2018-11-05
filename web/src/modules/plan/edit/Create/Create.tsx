import * as React from "react";
import Form from "../Form";
import { Title } from "../../../../ui/Title";
import { createPlanMutation } from "./mutation";
import { useApolloMutation } from "react-apollo-hooks";

export const Create = () => {
  const createPlan = useApolloMutation(createPlanMutation);
  return (
    <div>
      <Title>Create plan</Title>
      <Form mutate={createPlan} />
    </div>
  );
};
