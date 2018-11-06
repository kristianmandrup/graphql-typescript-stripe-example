import * as React from "react";
import { SubmitButton, form } from "../../../../ui";
const { useInputValue, createInput } = form;

const style: any = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

const createSubmitBtn = ({ onSubmit, state, name, key, buttonText }: any) => {
  return (
    <SubmitButton name={name} onClick={() => onSubmit(state)}>
      {buttonText}
    </SubmitButton>
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
  const inputs = [emailInput, passwordInput, submitButton];
  return (
    <div style={style}>
      <div>{inputs}</div>
    </div>
  );
};
