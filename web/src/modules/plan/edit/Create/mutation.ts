import { gql } from "apollo-boost";

export const createPlanMutation = gql`
  mutation CreatePlanMutation(nickname: $nickname, currency: $currency, amount: $amount, interval: $interval, product: $product) {
    id  
  }     
`;
