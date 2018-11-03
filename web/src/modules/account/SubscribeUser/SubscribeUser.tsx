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

export const ProductCheckout = (props: any) => {
  const { amount, stripeKey } = props;
  const subscribe = useApolloMutation(createSubscriptionMutation);
  const onToken = createSubscriptionMutater(subscribe);

  return (
    <StripeCheckout token={onToken} stripeKey={stripeKey} amount={amount} />
  );
};

// TODO: Add multiple products each with separate Stripe Key
export default () => {
  const stripeKey = process.env.REACT_APP_STRIPE_PUBLISHABLE!;
  return <ProductCheckout amount={1000} stripeKey={stripeKey} />;
};
