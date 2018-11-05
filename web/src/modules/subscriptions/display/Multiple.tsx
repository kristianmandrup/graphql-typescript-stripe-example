import * as React from "react";
import { Single } from "./Single";
import { Subscription } from "./Subscription";

interface Props {
  subscriptions: Subscription[];
}

export const Multiple = (props: Props) => {
  const { subscriptions } = props;
  return (
    <>
      {subscriptions.map((subscription: any, i: number) => (
        <Single key={i} {...subscription} />
      ))}
    </>
  );
};
