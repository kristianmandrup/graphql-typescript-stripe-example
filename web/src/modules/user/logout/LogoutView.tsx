import * as React from "react";
import { meQuery } from "../../../graphql/queries/me";
// import { useApolloMutation } from "react-apollo-hooks";

const updater = () => {
  return (cache: any, { data }: any) => {
    if (!data || !data.login) {
      return;
    }

    cache.writeQuery({
      query: meQuery,
      data: { me: null }
    });
  };
};

const logout = async ({ history, mutate, data, redirect }: any) => {
  const response = await mutate({
    variables: data
  });
  console.log(response);
  updater();
  history.push(redirect);
};

export default ({ history }: any) => {
  // const logout = useApolloMutation(logoutMutation);
  // mutate: logout
  // NOTE: we only need to update the cache (and remove the cookie?)
  const props = { history, update: updater, redirect: "/" };
  return <button onClick={async () => await logout(props)} />;
};
