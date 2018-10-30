import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main } from "./modules";
import { LoginView, LogoutView } from "./modules/user";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginView} />
        <Route path="/logout" component={LogoutView} />
        <Route path="/" render={Main} />
      </Switch>
    </BrowserRouter>
  );
};
