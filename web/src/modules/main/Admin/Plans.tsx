import * as React from "react";
import { edit, display } from "../../plan";
const { Create } = edit;
const { Query } = display;

export const Plans = () => (
  <>
    <Create />
    <Query />
  </>
);
