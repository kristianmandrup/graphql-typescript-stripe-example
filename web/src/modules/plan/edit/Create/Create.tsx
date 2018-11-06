import * as React from "react";
import { Form } from "../Form";
import { Title } from "../../../../ui/Title";
import { createPlanMutation } from "./mutation";
import { useApolloMutation } from "react-apollo-hooks";

export const Create = ({ admin }: any) => {
  const mutate = useApolloMutation(createPlanMutation);
  return !admin ? null : (
    <div>
      <Title>Create plan</Title>
      <Form mutate={mutate} />
    </div>
  );
};
