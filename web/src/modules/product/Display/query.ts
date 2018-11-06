import { gql } from "apollo-boost";

// TODO: use ProductInfo fragment
export const listProductsQuery = gql`
  query ListProductsQuery($limit: Int!) {
    listProducts(limit: $limit) {
      id
    }
  }
`;
