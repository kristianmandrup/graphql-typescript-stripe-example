import { gql } from "apollo-boost";

// TODO: use PlanInfo fragment
export const listCustomersQuery = gql`
  query ListCustomersQuery($limit: Int!) {
    listCustomers(limit: $limit) {
      id
    }
  }
`;
