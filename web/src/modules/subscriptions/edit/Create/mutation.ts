import { userFragment } from "../../../../graphql/fragments/userFragment";
import { gql } from "apollo-boost";

// Note: UserInfo - see userFragment
export const createSubscriptionMutation = gql`
  mutation CreateSubscriptionMutation($source: String!, $ccLast4: String!) {
    createSubcription(source: $source, ccLast4: $ccLast4) {
      ...UserInfo
    }
  }

  ${userFragment}
`;
