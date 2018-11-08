import { stripe } from "../../stripe";

// interface Product {
//   name;
//   type;
// }

export const createProduct = async (props: any) =>
  await stripe.products.create(props);

export const create = async (_: any, props: any, __: any) =>
  await createProduct(props);
