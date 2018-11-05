import { gql } from "apollo-boost";

// TODO: use PlanInfo fragment
export const listPlansQuery = gql`
  mutation ListPlansQuery(limit: Number!) {
    listPlans(limit: $limit) {
      id
    }
  }     
`;
