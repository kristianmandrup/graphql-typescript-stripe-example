import { meQuery } from "../../../graphql/queries/me";
import { useApolloQuery } from "react-apollo-hooks";
import { NoData } from "./NoData";
import { RedirectToLogin } from "./RedirectToLogin";
import { SubscribeUser } from "../../subscriptions/create";
import { Display } from "./display";

type DataRenderer = (data: any) => any;

// TODO: extract as utility
const renderFirst = (data: any, funs: DataRenderer[]) => {
  const found = funs.find(fun => fun(data));
  return found ? found(data) : null;
};

export default () => {
  const { data, loading } = useApolloQuery(meQuery);
  return loading
    ? null
    : renderFirst(data, [NoData, RedirectToLogin, SubscribeUser, Display]);
};
