import { gql } from "apollo-boost";

export const deletePlanMutation = gql`
  mutation DeletePlanMutation(id: String!) {
    deletePlan(id: $id)
  }
`;
