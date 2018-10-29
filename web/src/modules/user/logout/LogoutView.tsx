import * as React from "react";
import { gql } from "apollo-boost";
import { userFragment } from "../../../graphql/fragments/userFragment";
import { meQuery } from "../../../graphql/queries/me";
import { useApolloMutation } from "react-apollo-hooks";

const logoutMutation = gql`
  mutation LogoutMutation() {
    logout() {
      ...UserInfo
    }
  }

  ${userFragment}
`;

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
  const login = useApolloMutation(logoutMutation);
  const props = { history, update: updater, mutate: login, redirect: "/" };
  return <button onClick={async () => await logout(props)} />;
};
