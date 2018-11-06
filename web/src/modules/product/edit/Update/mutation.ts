import { gql } from "apollo-boost";

export const updateProductMutation = gql`
  mutation UpdateProductMutation($name: String!, $type: String!) {
    updateProduct(name: $name, type: $type) {
      id
    }
  }
`;
