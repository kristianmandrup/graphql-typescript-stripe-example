import * as React from "react";
import { ChangeCreditCard } from "../ChangeCreditCard";
import { CancelSubscription } from "../../subscriptions/cancel";

export const Display = (data: any) => {
  return (
    <>
      <ChangeCreditCard />
      <CancelSubscription />
    </>
  );
};
