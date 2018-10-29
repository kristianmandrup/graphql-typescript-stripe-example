import * as React from "react";
import { gql } from "apollo-boost";
import { userFragment } from "../../../graphql/fragments/userFragment";
import { useApolloMutation } from "react-apollo-hooks";

const cancelSubscriptionMutation = gql`
  mutation CancelSubscriptionMutation {
    cancelSubscription {
      ...UserInfo
    }
  }
  ${userFragment}
`;

export default () => {
  const cancelSubscription = useApolloMutation(cancelSubscriptionMutation);
  return (
    <button onClick={() => cancelSubscription()}>Cancel subscription</button>
  );
};
