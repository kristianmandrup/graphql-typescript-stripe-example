import * as React from "react";
import { Button } from "@material-ui/core";

const DeleteButton = ({ mutate }: any) => (
  <Button onClick={async () => await mutate()} />
);

export const Delete = () => {
  const deletePlan = () => console.log("delete plan");
  return <DeleteButton mutate={deletePlan} />;
};
