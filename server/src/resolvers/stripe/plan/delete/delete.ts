import { stripe } from "../../stripe";

export const deletePlan = async id => await stripe.plans.del(id);

export const del = async (_: any, { id }: any, __: any) => await deletePlan(id);
