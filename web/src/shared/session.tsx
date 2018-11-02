import * as React from "react";
import { Link } from "react-router-dom";
import { HeaderButton } from "src/ui/HeaderButton";
import { LogoutView } from "../modules/user";

export const sessionControls = () => {
  return (
    <div>
      <Link to="/login">
        <HeaderButton>login</HeaderButton>
      </Link>
      <span> | </span>
      <Link to="/register">
        <HeaderButton>register</HeaderButton>
      </Link>
    </div>
  );
};

export const notLoggedIn = (data: any) => {
  console.log("notLoggedIn", { data });
  return !data.me ? sessionControls() : null;
};

export const loggedIn = () => {
  return (
    <div>
      <Link to="/account">account</Link>
      <span> | </span>
      <LogoutView />
    </div>
  );
};
