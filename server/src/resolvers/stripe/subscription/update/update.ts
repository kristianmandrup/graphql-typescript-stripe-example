import { stripe } from "../../stripe";

const updateSubscriptionPlan = async ({
  subscription,
  subscriptionId,
  plan
}) => {
  const { id } = subscription.items.data[0];
  return await stripe.subscriptions.update(subscriptionId, {
    cancel_at_period_end: false,
    items: [
      {
        id,
        plan
      }
    ]
  });
};

const switchSubscriptionPlan = async ({ subscriptionId, plan }) => {
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  updateSubscriptionPlan({ subscription, subscriptionId, plan });
};

export const update = async (_: any, props: any, __: any) => {
  return await switchSubscriptionPlan(props);
};
