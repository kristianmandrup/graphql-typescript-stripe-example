import { stripe } from "../../stripe";

const switchSubscriptionPlan = async ({ subscriptionId, planId }) => {
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  return await stripe.subscriptions.update(subscriptionId, {
    cancel_at_period_end: false,
    items: [
      {
        id: subscription.items.data[0].id,
        plan: planId
      }
    ]
  });
};

export const update = async (_: any, props: any, __: any) => {
  return await switchSubscriptionPlan(props);
};
