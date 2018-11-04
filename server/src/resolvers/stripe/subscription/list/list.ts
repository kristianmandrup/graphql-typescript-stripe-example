import { stripe } from "../../stripe";

export const list = async ({ plan }) =>
  await stripe.subscriptions.list({
    plan
  });
