import * as React from "react";
import { Single } from "./Single";
import { Subscription } from "./Subscription";
import { listSubscriptionsQuery } from "./query";
import { useApolloMutation } from "react-apollo-hooks";

interface Props {
  subscriptions: Subscription[];
}

export const Query = (query: any) => {
  const listQuery = useApolloMutation(listSubscriptionsQuery);
  const subscriptions = listQuery(query);
  return <Multiple subscriptions={subscriptions} />;
};

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
