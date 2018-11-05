import { gql } from "apollo-boost";

// TODO: use SubscriptionInfo fragment
export const listSubscriptionsQuery = gql`
  mutation ListSubscriptionsQuery(limit: Number!) {
    listSubscriptions(limit: $limit) {
      id
    }
  }     
`;
