import gql from "graphql-tag";

const query = gql`
  query findData($slug: String!) {
    component(slug: $slug) {
      id
      name
    }
  }
`;

export default query;
