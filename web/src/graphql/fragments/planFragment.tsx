import { gql } from "apollo-boost";

export const planFragment = gql`
  fragment PlanInfo on Plan {
    currency
    interval
    product
    nickname
    amount
  }
`;
