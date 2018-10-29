import * as React from "react";
import StripeCheckout from "react-stripe-checkout";
import { SubcriptionMutate, createSubscriptionMutation } from "./mutation";
import { useApolloMutation } from "react-apollo-hooks";

export const createSubscriptionMutater = (mutate: SubcriptionMutate) => {
  return async (token: any) => {
    await mutate({
      variables: { source: token.id, ccLast4: token.card.last4 }
    });
  };
};

export default () => {
  const subscribe = useApolloMutation(createSubscriptionMutation);
  const onToken = createSubscriptionMutater(subscribe);
  return (
    <StripeCheckout
      token={onToken}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE!}
      amount={1000}
    />
  );
};
