import * as React from "react";
import { Title } from "../../../ui/Title";

export const Single = (product: any) => {
  const { name, type, amount } = product;
  return (
    <div>
      <Title>{name}</Title>
      <div>{type}</div>
      <div>{amount}</div>
    </div>
  );
};
