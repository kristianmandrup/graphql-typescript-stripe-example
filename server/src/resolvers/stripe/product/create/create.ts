import { stripe } from "../../stripe";

interface Product {
  name;
  type;
}

export const createProduct = async (props: Product) =>
  await stripe.products.create(props);

export const create = async (_: any, props: Product, __: any) =>
  await createProduct(props);
