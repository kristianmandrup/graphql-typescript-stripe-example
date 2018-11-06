import * as React from "react";
import { Single } from "./Single";
import { Create } from "../edit";
import { Plan } from "./Plan";
import { listPlansQuery } from "./query";
import { useApolloQuery } from "react-apollo-hooks";
import { Typography } from "@material-ui/core";

interface Props {
  admin?: boolean;
  plans: Plan[];
}

export const PlansError = () => <div>Error: Plans query</div>;

export const Query = (query: any) => {
  console.log({ query: listPlansQuery });
  const { data, error } = useApolloQuery(listPlansQuery);
  if (error) {
    console.log({ error });
  }
  return error ? <PlansError /> : <Multiple plans={data} />;
};

export const NoPlans = () => (
  <Typography variant="h4">No plans defined</Typography>
);

export const Multiple = (props: Props) => {
  const { plans, admin } = props;
  const { length } = plans;
  console.log("plans", { length });
  return length === 0 ? (
    <NoPlans />
  ) : (
    <>
      <Create admin={admin} />
      {plans.map((plan: any, i: number) => (
        <Single key={i} {...plan} />
      ))}
    </>
  );
};
