import { gql } from "apollo-boost";
import { productFragment } from "../../../graphql/fragments/productFragment";

// TODO: use ProductInfo fragment
export const listProductsQuery = gql`
  query ListProductsQuery($limit: Int!) {
    listProducts(limit: $limit) {
      ...productFragment
    }

    ${productFragment}
  }
`;
