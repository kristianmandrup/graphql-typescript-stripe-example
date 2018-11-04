import { stripe } from "../../stripe";

export const addTrialPeriod = async ({ subscriptionId, trialEnd }) => {
  return await stripe.subscriptions.update(subscriptionId, {
    trial_end: trialEnd,
    prorate: false
  });
};

export const resetBillingcycle = async ({ subscriptionId }) => {
  return await stripe.subscriptions.update(subscriptionId, {
    billing_cycle_anchor: "now",
    prorate: true
  });
};

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

const switchSubscriptionPlan = async ({ id, plan }) => {
  const subscription = await stripe.subscriptions.retrieve(id);
  updateSubscriptionPlan({ subscription, subscriptionId: id, plan });
};

export const update = async (_: any, props: any, __: any) => {
  return await switchSubscriptionPlan(props);
};
