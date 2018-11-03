import * as React from "react";
import { Link } from "react-router-dom";
import { meQuery } from "../graphql/queries/me";
import { HeaderButton } from "src/ui/HeaderButton";
import { useApolloQuery } from "react-apollo-hooks";
import { headerStyle } from "./style";
import { notLoggedIn, loggedIn } from "./session";

const sessionDisplay = ({ data, loading }: any) => {
  if (loading || !data) {
    return null;
  }
  return notLoggedIn(data) || loggedIn();
};

export const Header = () => {
  const result = useApolloQuery(meQuery);
  const { data, loading, error } = result;
  if (error) {
    return <div className="error">Error: ${JSON.stringify(error)}</div>;
  }
  return (
    <div style={{ ...headerStyle }}>
      <Link to="/">
        <HeaderButton style={{ fontSize: 24 }}>Stripe Example</HeaderButton>
      </Link>
      <Link to="/admin">admin</Link>
      {sessionDisplay({ data, loading })}
    </div>
  );
};
