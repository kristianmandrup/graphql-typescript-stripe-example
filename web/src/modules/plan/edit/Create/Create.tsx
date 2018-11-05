import * as React from "react";
import Form from "../Form";
import { Title } from "../../../../ui/Title";
import { createPlanMutation } from "./mutation";
import { useApolloMutation } from "react-apollo-hooks";

export const Create = () => {
  const createNewPlan = useApolloMutation(createPlanMutation);
  const createPlan = (data: any) => {
    console.log("create plan");
    createNewPlan(data);
  };
  return (
    <div>
      <Title>Create plan</Title>
      <Form onSubmit={createPlan} />
    </div>
  );
};
