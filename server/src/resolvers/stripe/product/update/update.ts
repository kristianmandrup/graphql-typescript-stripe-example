import { stripe } from "../../stripe";

export const updateProduct = async (id, ...props: any) =>
  await stripe.products.update(id, { ...props });

export const update = async (_: any, props: any, __: any) =>
  await updateProduct(props);
