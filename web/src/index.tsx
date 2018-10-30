import * as React from "react";
import * as ReactDOM from "react-dom";
import { Suspense } from "react";
import { ApolloProvider } from "react-apollo-hooks";
import registerServiceWorker from "./registerServiceWorker";
import { Routes } from "./Routes";
import { client } from "./client";
import { GlobalStyle } from "./style";
import { Fetching } from "./Fetching";

ReactDOM.render(
  <Suspense fallback={<Fetching />}>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Routes />
    </ApolloProvider>
  </Suspense>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
