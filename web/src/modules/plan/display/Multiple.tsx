import * as React from "react";
import { Single } from "./Single";
import { Create } from "../edit";
import { Plan } from "./Plan";

interface Props {
  plans: Plan[];
}

export const Multiple = (props: Props) => {
  const { plans } = props;
  return (
    <>
      <Create />
      {plans.map((plan: any, i: number) => (
        <Single key={i} {...plan} />
      ))}
    </>
  );
};
