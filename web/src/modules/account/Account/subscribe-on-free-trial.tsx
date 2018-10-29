import * as React from "react";
import SubscribeUser from "../SubscribeUser/SubscribeUser";

export const subscribeOnFreeTrial = (data: any) => {
  return data.me.type === "free-trial" ? <SubscribeUser /> : null;
};
