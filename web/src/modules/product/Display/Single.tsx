import * as React from "react";
import { Title } from "../../../ui/Title";

export const Single = (product: any) => {
  const { name, amount } = product;
  return (
    <div>
      <Title>{name}</Title>
      <div>{amount}</div>
    </div>
  );
};
