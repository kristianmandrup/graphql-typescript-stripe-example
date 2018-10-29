import * as React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { PaidUsers, Account, RegisterView } from "../";
import { Header } from "../../shared/Header";

export const Main = () => (
  <React.Fragment>
    <Header />
    <div>
      <Route path="/register" component={RegisterView} />
      <Route path="/account" component={Account} />
      <Route path="/paid-users" component={PaidUsers} />
      <Route exact={true} path="/" render={Home} />
    </div>
  </React.Fragment>
);
