import * as React from "react";
import { ChangeCreditCard } from "../ChangeCreditCard";
import { CancelSubscription } from "../CancelSubscription";

export const display = (data: any) => {
  return (
    <div>
      <div>your current last 4 digits: {data.me.ccLast4}</div>
      <ChangeCreditCard />
      <CancelSubscription />
    </div>
  );
};
