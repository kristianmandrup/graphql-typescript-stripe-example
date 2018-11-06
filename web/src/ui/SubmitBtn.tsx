import * as React from "react";
import { Button } from "@material-ui/core";

export const SubmitButton = ({ name, onClick }) => (
  <Button name={name} key={name} onClick={onClick}>
    Submit
  </Button>
);
