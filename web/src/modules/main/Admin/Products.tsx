import * as React from "react";
import { edit, display } from "../../product";
const products = [
  {
    name: "xyz",
    type: "service"
  }
];

export const Products = () => (
  <div>
    <edit.Create />
    <display.Multiple products={products} />
  </div>
);
