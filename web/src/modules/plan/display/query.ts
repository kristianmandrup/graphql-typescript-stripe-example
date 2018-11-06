import { gql } from "apollo-boost";

// TODO: use PlanInfo fragment
export const listPlansQuery = gql`
  query ListPlansQuery($limit: Int!) {
    listPlans(limit: $limit) {
      id
    }
  }
`;
