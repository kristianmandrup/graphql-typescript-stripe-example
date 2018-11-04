import { stripe } from "../../stripe";

export const listByPlan = async ({ plan }) =>
  await stripe.subscriptions.list({
    plan
  });

export const list = async (_: any, props: any, __: any) => {
  await listByPlan(props);
};
