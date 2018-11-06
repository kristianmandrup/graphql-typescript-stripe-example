import * as React from "react";
import { ChangeCreditCard } from "../ChangeCreditCard";
import { edit } from "../../subscriptions";

export const Display = (data: any) => {
  return (
    <>
      <ChangeCreditCard />
      <edit.Delete />
    </>
  );
};
