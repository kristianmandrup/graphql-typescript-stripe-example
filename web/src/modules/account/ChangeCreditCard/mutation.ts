import { MutationFn } from "react-apollo";
import { gql } from "apollo-boost";
import {
  ChangeCreditCardMutation,
  ChangeCreditCardMutationVariables
} from "../../../schemaTypes";
import { userFragment } from "../../../graphql/fragments/userFragment";

export type ChangeCreditCardMutater = MutationFn<
  ChangeCreditCardMutation,
  ChangeCreditCardMutationVariables
>;

export const changeCreditCardMutation = gql`
  mutation ChangeCreditCardMutation($source: String!, $ccLast4: String!) {
    changeCreditCard(source: $source, ccLast4: $ccLast4) {
      ...UserInfo
    }
  }

  ${userFragment}
`;
