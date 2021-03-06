import { stripe } from "../../stripe";

// interface ListProductQuery {
//   limit: number;
// }

export const listProducts = async (props: any) =>
  await stripe.products.list(props);

export const list = async (_: any, props: any, __: any) =>
  await listProducts(props);
