import { gql } from "apollo-boost";

export const deleteProductMutation = gql`
  mutation DeleteProductMutation($id: String!) {
    deleteProduct(id: $id)
  }
`;
