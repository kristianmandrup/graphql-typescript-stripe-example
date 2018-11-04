import { stripe } from "../../stripe";

const defaults = {
  plan: process.env.PLAN
};

const createStripeCustomer = async ({ email, source, plan }) =>
  await stripe.customers.create({
    email,
    source,
    plan
  });

export const stripeIdFromCustomer = async (
  user: any,
  source: any,
  plan?: string
): Promise<string> => {
  const { email } = user;
  plan = (plan || defaults.plan)!;
  const customer = await createStripeCustomer({
    email,
    source,
    plan
  });
  return customer.id;
};
