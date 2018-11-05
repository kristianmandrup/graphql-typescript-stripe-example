import * as React from "react";
import Form from "./Form";
import { Title } from "../../../ui/Title";

export const Update = () => {
  const updatePlan = () => console.log("update plan");

  return (
    <div>
      <Title>Update plan</Title>
      <Form onSubmit={updatePlan} />
    </div>
  );
};
