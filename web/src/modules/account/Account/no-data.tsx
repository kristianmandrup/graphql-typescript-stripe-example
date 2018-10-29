import * as React from "react";
export const noData = (data: any) => {
  return !data ? <div>data is undefined</div> : false;
};
