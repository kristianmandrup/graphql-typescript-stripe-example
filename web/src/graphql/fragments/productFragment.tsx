import { gql } from "apollo-boost";

export const productFragment = gql`
  fragment ProductInfo on Plan {
    name
    type
  }
`;
