import * as React from "react";
import { Single } from "./Single";
import { Product } from "./Product";
import { listProductsQuery } from "./query";
import { useApolloMutation } from "react-apollo-hooks";

interface Props {
  products: Product[];
}

export const ProductsError = () => <div>Error: Products query</div>;

export const Query = ({ variables = { limit: 10 } }: any) => {
  console.log({ variables });
  const { data, error } = useApolloMutation(listProductsQuery, { variables });
  if (error) {
    console.log({ error });
  }
  return error ? <ProductsError /> : <Multiple products={data} />;
};

export const Multiple = (props: Props) => {
  const { products } = props;
  return (
    <>
      {products.map((product: any, i: number) => (
        <Single key={i} {...product} />
      ))}
    </>
  );
};
