import { stripe } from "../../stripe";

interface SubscriptionQuery {
  plan?: string;
  customer?: string;
}

export const listBy = async (query: SubscriptionQuery) =>
  await stripe.subscriptions.list(query);

export const list = async (_: any, props: any, __: any) => {
  await listBy(props);
};
