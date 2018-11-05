import { gql } from "apollo-boost";

export const createPlanMutation = gql`
  mutation CreatePlanMutation(nickname: String!, currency: String!, amount: Number!, interval: String, product: String) {
    createPlan(nickname: $nickname, currency: $currency, amount: $amount, interval: $interval, product: $product) {
      id  
    }
  }     
`;
