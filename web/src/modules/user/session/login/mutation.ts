import { gql } from "apollo-boost";
import { userFragment } from "../../../../graphql/fragments/userFragment";

export const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ...UserInfo
    }
  }

  ${userFragment}
`;
