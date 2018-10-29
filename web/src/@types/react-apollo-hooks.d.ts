declare module "react-apollo-hooks" {
  function ApolloProvider({ children, client }: any): any;
  function useApolloClient(): any;
  function useApolloQuery(query: any, { variables }?: any): any;
  function useApolloMutation(mutation: any, baseOptions?: any): any;
}
