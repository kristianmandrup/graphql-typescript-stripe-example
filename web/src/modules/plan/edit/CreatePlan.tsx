import * as React from "react";
import Form from "./Form";
import { Title } from "../../../ui/Title";

export const CreatePlan = () => {
  const createPlan = () => console.log("create plan");
  return (
    <div>
      <Title>Create plan</Title>
      <Form onSubmit={createPlan} />
    </div>
  );
};
