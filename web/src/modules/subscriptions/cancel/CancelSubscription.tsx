import * as React from "react";
import { useApolloMutation } from "react-apollo-hooks";
import { cancelSubscriptionMutation } from "./mutation";
import { Button } from "@material-ui/core";

export const CancelSubscription = () => {
  const mutate = useApolloMutation(cancelSubscriptionMutation);
  return <Button onClick={() => mutate()}>Cancel subscription</Button>;
};
