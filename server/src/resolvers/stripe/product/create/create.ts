import { stripe } from "../../stripe";

export const createProduct = async ({ name, type }) => {
  return await stripe.products.create({
    name,
    type
  });
};

export const create = async (_: any, { name, type }: any, __: any) => {
  const product = await createProduct({ name, type });
  return product;
};
