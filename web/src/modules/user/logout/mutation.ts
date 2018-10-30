import { gql } from "apollo-boost";
import { userFragment } from "../../../graphql/fragments/userFragment";

export const logoutMutation = gql`
  mutation LogoutMutation() {
    logout() {
      ...UserInfo
    }
  }

  ${userFragment}
`;
