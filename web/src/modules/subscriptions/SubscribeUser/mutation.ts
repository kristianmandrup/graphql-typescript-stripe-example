import { MutationFn } from "react-apollo";
import { userFragment } from "../../../graphql/fragments/userFragment";
import { gql } from "apollo-boost";
import {
  CreateSubscriptionMutation,
  CreateSubscriptionMutationVariables
} from "../../../schemaTypes";

// Note: UserInfo - see userFragment
export const createSubscriptionMutation = gql`
  mutation CreateSubscriptionMutation($source: String!, $ccLast4: String!) {
    createSubcription(source: $source, ccLast4: $ccLast4) {
      ...UserInfo
    }
  }

  ${userFragment}
`;

export type SubcriptionMutate = MutationFn<
  CreateSubscriptionMutation,
  CreateSubscriptionMutationVariables
>;
