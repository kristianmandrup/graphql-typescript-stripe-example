import * as React from "react";
import { Link } from "react-router-dom";
import { meQuery } from "../graphql/queries/me";
import { HeaderButton } from "src/ui/HeaderButton";
import { useApolloClient, useApolloQuery } from "react-apollo-hooks";
import { headerStyle } from "./style";
import { notLoggedIn, loggedIn } from "./session";

const sessionDisplay = ({ data, loading }: any) => {
  if (loading || !data) {
    return null;
  }
  return notLoggedIn(data) || loggedIn();
};

export const Header = () => {
  const client = useApolloClient();
  console.log({ client });
  const { data, loading, error } = useApolloQuery(meQuery, { client });
  if (error) {
    return <div className="error">Error: ${JSON.stringify(error)}</div>;
  }
  return (
    <div style={{ ...headerStyle }}>
      <Link to="/">
        <HeaderButton style={{ fontSize: 24 }}>Stripe Example</HeaderButton>
      </Link>
      {sessionDisplay({ data, loading })}
    </div>
  );
};
