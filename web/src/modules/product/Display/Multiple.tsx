import * as React from "react";
import { Single } from "./Single";

interface Product {
  name: string;
  type: string;
}

interface Props {
  products: Product[];
}

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
