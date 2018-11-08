import { gql } from "apollo-boost";
import { planFragment } from "../../../graphql/fragments/planFragment";

export const listPlansQuery = gql`
  query ListPlansQuery($limit: Int!) {
    listPlans(limit: $limit) {
      ...PlanInfo
    }

    ${planFragment}
  }
`;
