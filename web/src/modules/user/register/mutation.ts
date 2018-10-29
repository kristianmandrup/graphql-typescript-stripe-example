import { gql } from "apollo-boost";

export const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`;
