import { getUser } from "../../../user";
import { findUserInSession } from "../../common";
import { stripe } from "../../stripe";

const deleteCard = async (user: any, stripeCustomer: any) => {
  await stripe.customers.deleteCard(
    user.stripeId,
    stripeCustomer.default_source as string
  );
};

const deleteSubscription = async (subscription: any) => {
  return await stripe.subscriptions.del(subscription.id);
};

export const cancelSubscriptionAtEnd = async (subscription: any) => {
  return await stripe.subscriptions.update(subscription.id, {
    cancel_at_period_end: true
  });
};

const getCustomerSubscription = (stripeCustomer: any) => {
  const [subscription] = stripeCustomer.subscriptions.data;
  return subscription;
};

const setUserType = async (user: any, type: string = "free-trial") => {
  user.type = type;
  await user.save();
  return user;
};

const retrieveStripeCustomer = async (user: any) => {
  return await stripe.customers.retrieve(user.stripeId);
};

export const cancel = async (_: any, __: any, { req }: any) => {
  const user = await findUserInSession(req, getUser);
  const stripeCustomer = await retrieveStripeCustomer(user);
  const subscription = getCustomerSubscription(stripeCustomer);
  await deleteSubscription(subscription);
  await deleteCard(user, stripeCustomer);
  console.log("subscription cancelled", { user, subscription });
  return await setUserType(user, "free-trial");
};
