import { stripe } from "../../stripe";
import { getUser } from "../../../user";
import { findUserInSession } from "../../common";
import { stripeIdFromCustomer, updateCustomer } from "../../customer";
import { updateUser } from "../../../../model/user/update";
import { listBy } from "../list/list";

const defaults = {
  plan: process.env.PLAN
};

interface Item {
  plan: string;
}

interface Subscription {
  customer: string;
  items: Item[];
  billing_cycle_anchor?: number;
  trial_end?: number;
}

const createStripeSubscription = async (subscription: Subscription) =>
  await stripe.subscriptions.create(subscription);

interface NewSubscription {
  plan: string;
  startAt?: number;
}

const createSubscription = async (
  stripeId: string,
  subscription: NewSubscription
) => {
  const { plan, startAt } = subscription;
  const items = [
    {
      plan: plan //|| defaults.plan
    }
  ];
  await createStripeSubscription({
    customer: stripeId,
    items,
    billing_cycle_anchor: startAt
  });
  return stripeId;
};

const updateCustomerAndSubscription = async ({
  stripeId,
  plan,
  source
}: any) => {
  await updateCustomer(stripeId, source);
  const subscription = {
    plan
  };
  await createSubscription(stripeId, subscription);
  return stripeId;
};

export const create = async (_: any, props: any, { req }: any) => {
  const { source, ccLast4 } = props;
  const user = await findUserInSession(req, getUser);
  let { stripeId } = user;
  stripeId = stripeId
    ? await updateCustomerAndSubscription({ stripeId, source })
    : await stripeIdFromCustomer(user, source);

  await updateUser(user, stripeId, ccLast4, "paid");
  console.log("subscription created", { user });
  return user;
};
