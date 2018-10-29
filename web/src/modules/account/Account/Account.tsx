import { meQuery } from "../../../graphql/queries/me";
import { useApolloQuery } from "react-apollo-hooks";
import { noData } from "./no-data";
import { loggedIn } from "./logged-in";
import { subscribeOnFreeTrial } from "./subscribe-on-free-trial";
import { display } from "./display";

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
    : renderFirst(data, [noData, loggedIn, subscribeOnFreeTrial, display]);
};
