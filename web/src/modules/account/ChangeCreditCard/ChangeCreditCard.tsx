import * as React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useApolloMutation } from "react-apollo-hooks";
import { changeCreditCardMutation, ChangeCreditCardMutater } from "./mutation";

export const createMutater = (changeCreditCard: ChangeCreditCardMutater) => {
  return async (token: any) => {
    await changeCreditCard({
      variables: { source: token.id, ccLast4: token.card.last4 }
    });
  };
};

export default () => {
  const changeCreditCard = useApolloMutation(changeCreditCardMutation);
  const onToken = createMutater(changeCreditCard);
  const stripeKey = process.env.REACT_APP_STRIPE_PUBLISHABLE!;
  console.log("Change Card", { stripeKey });
  return (
    <StripeCheckout
      token={onToken}
      panelLabel="Change Card"
      stripeKey={stripeKey}
    >
      <button>Change credit card</button>
    </StripeCheckout>
  );
};
