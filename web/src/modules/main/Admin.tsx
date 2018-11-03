import * as React from "react";
import { CreateProduct, DisplayProducts } from "../product";
import { CreatePlan } from "../plan";
import { Title } from "../../ui/Title";

const products = [
  {
    name: "xyz",
    type: "service"
  }
];

export const Admin = () => {
  // TODO: check if admin (or in route?)
  return (
    <div>
      <div>
        <Title>Products</Title>
        <CreateProduct />
        <DisplayProducts products={products} />
      </div>
      <CreatePlan />
    </div>
  );
};
