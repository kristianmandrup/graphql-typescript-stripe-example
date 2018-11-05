import * as React from "react";
import { Button } from "@material-ui/core";
import { deleteProductMutation } from "./mutation";
import { useApolloMutation } from "react-apollo-hooks";

const DeleteButton = ({ mutate }: any) => (
  <Button onClick={async () => await mutate()} />
);

export const Delete = () => {
  const mutate = useApolloMutation(deleteProductMutation);
  return <DeleteButton mutate={mutate} />;
};
