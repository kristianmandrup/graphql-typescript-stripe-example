import { stripe } from "../../stripe";

const updateStripeCustomer = async ({ stripeId, source }) =>
  await stripe.customers.update(stripeId, {
    source
  });

export const updateCustomer = async (stripeId: string, source: any) =>
  await updateStripeCustomer({
    stripeId,
    source
  });
