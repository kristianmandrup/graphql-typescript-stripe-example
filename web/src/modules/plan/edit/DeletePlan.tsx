import * as React from "react";
import { Button } from "@material-ui/core";

export const CreatePlan = () => {
  const deletePlan = () => console.log("delete plan");
  return <Button onClick={deletePlan} />;
};
