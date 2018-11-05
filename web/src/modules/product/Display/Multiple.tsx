import * as React from "react";
import { Single } from "./Single";
import { Product } from "./Product";
import { listProductsQuery } from "./mutation";
import { useApolloMutation } from "react-apollo-hooks";

interface Props {
  products: Product[];
}

export const Query = (query: any) => {
  const listQuery = useApolloMutation(listProductsQuery);
  const products = listQuery(query);
  return <Multiple products={products} />;
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
