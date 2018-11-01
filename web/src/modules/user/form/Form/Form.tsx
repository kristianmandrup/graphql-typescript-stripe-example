import * as React from "react";
import { RedButton } from "../../../../ui/RedButton";
import { createInput } from "./input";
import { useInputValue } from "./useInputValue";

const createSubmitBtn = ({ onSubmit, state, key, buttonText }: any) => {
  // console.log("createSubmitBtn", { state });
  return (
    <RedButton key={key} onClick={() => onSubmit(state)}>
      {buttonText}
    </RedButton>
  );
};

// TODO: change into new Hook style component (function)
export default ({ buttonText = "submit", onSubmit }: any) => {
  const { ...email } = useInputValue("");
  const { ...password } = useInputValue("");
  // console.log("useInputValue", { email, password });

  const emailInput = createInput({
    name: "email",
    key: "email",
    ...email
  });
  const passwordInput = createInput({
    name: "password",
    key: "password",
    type: "password",
    ...password
  });

  const submitButton = createSubmitBtn({
    onSubmit,
    key: "submit",
    state: { email: email.value, password: password.value },
    buttonText
  });
  const form = [emailInput, passwordInput, submitButton];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div>{form}</div>
    </div>
  );
};
