import * as React from "react";
import { Title } from "../../../ui/Title";

export const Single = (customer: any) => {
  const { name, email } = customer;
  return (
    <div>
      <Title>{name}</Title>
      <div>{email}</div>
    </div>
  );
};
