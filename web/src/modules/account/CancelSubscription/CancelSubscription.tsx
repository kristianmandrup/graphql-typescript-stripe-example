import * as React from "react";
import { useApolloMutation } from "react-apollo-hooks";
import { cancelSubscriptionMutation } from "./mutation";

export default () => {
  const cancelSubscription = useApolloMutation(cancelSubscriptionMutation);
  return (
    <button onClick={() => cancelSubscription()}>Cancel subscription</button>
  );
};
