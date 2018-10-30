import * as React from "react";
import { Redirect } from "react-router-dom";

export const redirectTologin = (data: any) => {
  return !data.me ? <Redirect to="/login" /> : false;
};
