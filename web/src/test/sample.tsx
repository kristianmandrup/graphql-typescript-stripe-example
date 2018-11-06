import * as React from "react";
import ApolloClient from "apollo-client";
import { ApolloProvider, graphql } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import renderer from "react-test-renderer";
import { createMockedNetworkFetch } from "./mocked";
import query from "./query.graphql";

const TestComponent = (props: any) => {
  if (props.data.loading) {
    return <div>loading ... {JSON.stringify(props)}</div>;
  }
  return <div>got data ... {JSON.stringify(props)}</div>;
};

const TestComponentWithApollo = graphql(query, {
  options: (props: any) => ({
    variables: { url: props.url }
  })
})(TestComponent);

const createResponse = (request): Response => {
  // pure function returning data
  console.log("creating mocked response for request:", request); // eslint-disable-line no-console
  const respData = {
    data: {
      component: {
        id: 1,
        name: "foo",
        __typename: "component"
      }
    }
  };

  return new Response(JSON.stringify(respData));
};

const mockedNetworkFetch = createMockedNetworkFetch(createResponse, {
  latency: 100
});
const client = new ApolloClient({
  link: createHttpLink({
    uri: "http://localhost:3000",
    fetch: mockedNetworkFetch
  }),
  cache: new InMemoryCache()
});

it("should render without exploding", done => {
  const component = renderer.create(
    <ApolloProvider client={client}>
      <div>
        <TestComponentWithApollo url="/" />
      </div>
    </ApolloProvider>
  );
  // first is loading
  const tree = component.toJSON();
  expect(tree.children[0].children[0]).toMatch("loading ...");
  expect(tree).toMatchSnapshot();

  // data arrived
  setTimeout(() => {
    try {
      const tree2 = component.toJSON();
      expect(tree2.children[0].children).toMatchObject([
        "got data ... ",
        '{"data":{"variables":{},"loading":false,"networkStatus":7,"component":{"id":1,"name":"foo","__typename":"component"}}}'
      ]);
      expect(tree2).toMatchSnapshot();
    } catch (e) {
      return done.fail(e);
    }
    return done();
  }, 2500);
});
