import * as React from "react";
import { Create } from "../edit";

export const FreeTrial = (data: any) => {
  return data.me.type === "free-trial" ? <Create /> : null;
};
