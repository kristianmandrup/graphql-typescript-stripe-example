import { gql } from "apollo-boost";

// TODO: use ProductInfo fragment
export const listProductsQuery = gql`
  query ListProductsQuery($limit: Number!) {
    listProducts(limit: $limit) {
      id
    }
  }
`;
