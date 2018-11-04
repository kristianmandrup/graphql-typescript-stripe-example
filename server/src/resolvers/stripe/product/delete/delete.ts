import { stripe } from "../../stripe";

export const deleteProduct = async id => await stripe.products.del(id);

export const del = async (_: any, { id }: any, __: any) =>
  await deleteProduct(id);
