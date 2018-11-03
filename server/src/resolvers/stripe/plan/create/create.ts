import { stripe } from "../../stripe";

const defaults = {
  plan: {
    currency: "usd",
    interval: "month"
  }
};

const createPlan = async (props: any) => {
  props = {
    ...defaults.plan,
    ...props
  };
  const { currency, interval, product, nickname, amount } = props;
  return await stripe.plans.create({
    currency,
    interval,
    product,
    nickname,
    amount
  });
};

export const create = async (_: any, props: any, __: any) => {
  return await createPlan(props);
};
