import { stripe } from "../../stripe";

interface Subscription {
  subscription: any;
  plan: string;
}

export const reactivateSubscription = async ({
  subscription,
  plan
}: Subscription) => {
  const { id } = subscription.items.data[0];
  await stripe.subscriptions.update(subscription.id, {
    cancel_at_period_end: false,
    items: [
      {
        id,
        plan
      }
    ]
  });
};

export const reactivate = async (_: any, props: any, __: any) => {
  await reactivateSubscription(props);
};
