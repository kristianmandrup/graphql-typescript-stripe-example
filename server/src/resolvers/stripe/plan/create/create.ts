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

interface CreatedPlan {
  id: string;
}

const createPlan = async (props: NewPlan): Promise<CreatedPlan> => {
  props = {
    ...defaults.plan,
    ...props
  };
  return await stripe.plans.create(props);
};

export const create = async (_: any, props: any, __: any): Promise<string> => {
  const { id } = await createPlan(props);
  return id;
};
