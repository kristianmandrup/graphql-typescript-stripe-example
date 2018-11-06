import { gql } from "apollo-boost";

export const updatePlanMutation = gql`
  mutation UpdatePlanMutation(
    $nickname: String!
    $currency: String!
    $amount: Number!
    $interval: String
    $product: String
  ) {
    updatePlan(
      nickname: $nickname
      currency: $currency
      amount: $amount
      interval: $interval
      product: $product
    ) {
      id
    }
  }
`;
