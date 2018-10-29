import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginView } from "./modules/user/LoginView";
import { RegisterView } from "./modules/user/RegisterView";
import { Account } from "./modules/account/Account";
import { PaidUsers } from "./modules/account/PaidUsers";
import { Header } from "./shared/Header";

const Homepage = () => <div>homepage</div>;

const Main = () => (
  <React.Fragment>
    <Header />
    <div>
      <Route path="/register" component={RegisterView} />
      <Route path="/account" component={Account} />
      <Route path="/paid-users" component={PaidUsers} />
      <Route exact={true} path="/" render={Homepage} />
    </div>
  </React.Fragment>
);

export class Routes extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginView} />
          <Route path="/" render={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}
