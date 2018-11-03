import * as React from "react";
import { RedButton } from "../../../../ui/RedButton";
import { createInput } from "../../../../ui/form/input";
import { useInputValue } from "../../../../ui/form/useInputValue";

const createSubmitBtn = ({ onSubmit, state, name, key, buttonText }: any) => {
  return (
    <RedButton name={name} key={key || name} onClick={() => onSubmit(state)}>
      {buttonText}
    </RedButton>
  );
};

export default ({ buttonText = "submit", onSubmit }: any) => {
  const { ...email } = useInputValue("");
  const { ...password } = useInputValue("");
  const emailInput = createInput({
    name: "email",
    ...email
  });
  const passwordInput = createInput({
    name: "password",
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
