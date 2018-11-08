import { meQuery } from "../queries";
import { useApolloQuery } from "react-apollo-hooks";
import { NoData } from "./NoData";
import { RedirectToLogin } from "./RedirectToLogin";
import { Display } from "./Display";
import { edit } from "../../subscriptions";

type DataRenderer = (data: any) => any;

// TODO: extract as utility
const renderFirst = (data: any, funs: DataRenderer[]) => {
  const found = funs.find(fun => fun(data));
  return found ? found(data) : null;
};

export const Account = () => {
  const { data, loading } = useApolloQuery(meQuery);
  return loading
    ? null
    : renderFirst(data, [NoData, RedirectToLogin, edit.Create, Display]);
};
