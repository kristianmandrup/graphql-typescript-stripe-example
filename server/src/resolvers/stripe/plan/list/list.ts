import { stripe } from "../../stripe";

interface ListProductsQuery {
  limit: number;
}

export const listProducts = async (props: ListProductsQuery) =>
  await stripe.products.list(props);

export const list = async (_: any, props: ListProductsQuery, __: any) =>
  await listProducts(props);
