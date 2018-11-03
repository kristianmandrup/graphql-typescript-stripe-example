import * as React from "react";
import { CreateProduct, DisplayProducts } from "../../product";
const products = [
  {
    name: "xyz",
    type: "service"
  }
];

export const Products = () => (
  <div>
    <CreateProduct />
    <DisplayProducts products={products} />
  </div>
);
