import { stripe } from "../../stripe";

const defaults = {
  plan: {
    currency: "usd",
    interval: "month"
  }
};

interface NewPlan {
  currency: string;
  interval: any;
  product: string;
  nickname: string;
  amount: number;
}

const createPlan = async (props: NewPlan) => {
  props = {
    ...defaults.plan,
    ...props
  };
  return await stripe.plans.create(props);
};

export const create = async (_: any, props: any, __: any) => {
  return await createPlan(props);
};
