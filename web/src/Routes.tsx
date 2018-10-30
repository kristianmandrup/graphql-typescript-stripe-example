import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main, UserSession } from "./modules";

export class Routes extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <UserSession />
          <Route path="/" render={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}
