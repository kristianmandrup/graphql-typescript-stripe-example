import { gql } from "apollo-boost";

// TODO: use SubscriptionInfo fragment
export const listSubscriptionsQuery = gql`
  query ListSubscriptionsQuery($limit: Number!) {
    listSubscriptions(limit: $limit) {
      id
    }
  }
`;
