import { stripe } from "../../stripe";

export const updatePlan = async (id, ...props: any) =>
  await stripe.plans.update(id, { ...props });

export const update = async (_: any, props: any, __: any) =>
  await updatePlan(props);
