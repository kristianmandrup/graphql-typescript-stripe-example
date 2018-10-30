import * as React from "react";
import { Route } from "react-router-dom";
import { LoginView, LogoutView } from "../user";

export const UserSession = () => {
  return (
    <>
      <Route path="/login" component={LoginView} />
      <Route path="/logout" component={LogoutView} />
    </>
  );
};
