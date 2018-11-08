import { stripe } from "../../stripe";
import { getUser } from "../../../user";
import { findUserInSession } from "../../common";

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

// TODO: make DRY
const retrieveStripeCustomer = async (user: any) => {
  return await stripe.customers.retrieve(user.stripeId);
};

// TODO: use from customer/subscription
const getCustomerSubscription = (stripeCustomer: any) => {
  const [subscription] = stripeCustomer.subscriptions.data;
  return subscription;
};

export const reactivate = async (_: any, props: any, { req }: any) => {
  const user = await findUserInSession(req, getUser);
  const stripeCustomer = await retrieveStripeCustomer(user);
  const subscription = getCustomerSubscription(stripeCustomer);
  const plan = "xyz";
  await reactivateSubscription({ subscription, plan });
};
