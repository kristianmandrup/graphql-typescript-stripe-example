import { gql } from "apollo-boost";
import { userFragment } from "../../../graphql/fragments/userFragment";

export const cancelSubscriptionMutation = gql`
  mutation CancelSubscriptionMutation {
    cancelSubscription {
      ...UserInfo
    }
  }
  ${userFragment}
`;
