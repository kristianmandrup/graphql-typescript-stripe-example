import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main } from "./modules";
// import { LoginView } from "./modules/user";

// TODO: login should be a modal using React Portal
export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};
