import * as React from "react";
import { Subscription } from "./Subscription";

export const Single = (subscription: Subscription) => {
  // billing_cycle_anchor,
  const { customer, items, trial_end } = subscription;
  const { plan } = items[0];
  return (
    <div className="subscription">
      <div>{plan}</div>
      <div>{customer}</div>
      <div>{trial_end}</div>
    </div>
  );
};
