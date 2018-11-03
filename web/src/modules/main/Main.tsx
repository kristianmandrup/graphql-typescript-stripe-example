import * as React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { PaidUsers, Account, RegisterView } from "../";
import { Header } from "../../shared/Header";
import { Admin } from "./Admin";
import AppBar from "./AppBar/AppBar";

export const Main = () => (
  <React.Fragment>
    <AppBar />
    <Header />
    <div>
      <Route path="/register" component={RegisterView} />
      <Route path="/account" component={Account} />
      <Route path="/admin" component={Admin} />
      <Route path="/paid-users" component={PaidUsers} />
      <Route exact={true} path="/" render={Home} />
    </div>
  </React.Fragment>
);
