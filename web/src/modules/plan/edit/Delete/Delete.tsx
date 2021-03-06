import * as React from "react";
import { Button } from "@material-ui/core";
import { deletePlanMutation } from "./mutation";
import { useApolloMutation } from "react-apollo-hooks";

const DeleteButton = ({ mutate }: any) => (
  <Button onClick={async () => await mutate()} />
);

export const Delete = () => {
  const mutate = useApolloMutation(deletePlanMutation);
  return <DeleteButton mutate={mutate} />;
};
