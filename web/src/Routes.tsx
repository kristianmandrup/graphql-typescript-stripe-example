import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main, LoginView } from "./modules";

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
