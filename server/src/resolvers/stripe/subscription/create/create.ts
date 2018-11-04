import { stripe } from "../../stripe";
import { getUser } from "../../../user";
import { findUserInSession } from "../../common";

const defaults = {
  plan: process.env.PLAN
};

const createStripeCustomer = async ({ email, source, plan }) =>
  await stripe.customers.create({
    email,
    source,
    plan
  });

const stripeIdFromCustomer = async (
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

interface Item {
  plan: string;
}

interface Subscription {
  customer: string;
  items: Item[];
  billing_cycle_anchor?: number;
}

const createStripeSubscription = async (subscription: Subscription) =>
  await stripe.subscriptions.create(subscription);

const updateStripeCustomer = async ({ stripeId, source }) =>
  await stripe.customers.update(stripeId, {
    source
  });

const updateCustomer = async (
  stripeId: string,
  source: any,
  plan?: string
): Promise<string> => {
  plan = (plan || defaults.plan)!;
  // update customer
  await updateStripeCustomer({
    stripeId,
    source
  });
  const items = [
    {
      plan
    }
  ];
  await createStripeSubscription({
    customer: stripeId,
    items
  });
  return stripeId;
};

const updateUser = async (
  user: any,
  stripeId: string,
  ccLast4: any,
  type: string = "paid"
) => {
  user.stripeId = stripeId;
  user.type = type;
  user.ccLast4 = ccLast4;
  await user.save();
  return user;
};

export const create = async (_: any, props: any, { req }: any) => {
  const { source, ccLast4 } = props;
  const user = await findUserInSession(req, getUser);
  let { stripeId } = user;
  stripeId = stripeId
    ? await stripeIdFromCustomer(user, source)
    : await updateCustomer(stripeId, source);
  await updateUser(user, stripeId, ccLast4, "paid");
  console.log("subscription created", { user });
  return user;
};
