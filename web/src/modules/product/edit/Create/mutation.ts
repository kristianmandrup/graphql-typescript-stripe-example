import { gql } from "apollo-boost";

export const createProductMutation = gql`
  mutation CreateProductMutation(name: String!, type: String!) {
    createProduct(name: $name, type: $type) {
      id  
    }
  }     
`;
