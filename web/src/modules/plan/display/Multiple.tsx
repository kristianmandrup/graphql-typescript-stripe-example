import * as React from "react";
import { Single } from "./Single";
import { Create } from "../edit";
import { Plan } from "./Plan";
import { listPlansQuery } from "./mutation";
import { useApolloMutation } from "react-apollo-hooks";

interface Props {
  plans: Plan[];
}

export const Query = (query: any) => {
  const listQuery = useApolloMutation(listPlansQuery);
  const plans = listQuery(query);
  return <Multiple plans={plans} />;
};

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
