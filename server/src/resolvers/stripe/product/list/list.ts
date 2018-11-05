import { stripe } from "../../stripe";

interface ListProductQuery {
  limit: number;
}

export const listProducts = async (props: ListProductQuery) =>
  await stripe.products.list(props);

export const list = async (_: any, props: ListProductQuery, __: any) =>
  await listProducts(props);
