import * as React from "react";
import { Single } from "./Single";
import { Create } from "../edit";
import { Customer } from "./Customer";
import { listCustomersQuery } from "./query";
import { useApolloQuery } from "react-apollo-hooks";
import { Typography } from "@material-ui/core";

interface Props {
  admin?: boolean;
  customers: Customer[];
}

export const CustomersError = () => <div>Error: Customers query</div>;

export const Query = ({ variables = { limit: 10 } }: any) => {
  console.log({ variables });
  const { data, error } = useApolloQuery(listCustomersQuery, { variables });
  if (error) {
    console.log({ error });
  }
  return error ? <CustomersError /> : <Multiple customers={data} />;
};

export const Nocustomers = () => (
  <Typography variant="h4">No customers defined</Typography>
);

export const Multiple = (props: Props) => {
  const { customers, admin } = props;
  const { length } = customers;
  console.log("customers", { length });
  return length === 0 ? (
    <Nocustomers />
  ) : (
    <>
      <Create admin={admin} />
      {customers.map((customer: any, i: number) => (
        <Single key={i} {...customer} />
      ))}
    </>
  );
};
