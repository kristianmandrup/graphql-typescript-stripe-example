import * as React from "react";
import { SubmitButton, form } from "../../../ui";
const { createInput, useInputValue } = form;
import {} from "../../../ui/form/useInputValue";

const createSubmitBtn = ({ onSubmit, state, name, buttonText }: any) => {
  return (
    <SubmitButton name={name} onClick={() => onSubmit(state)}>
      {buttonText}
    </SubmitButton>
  );
};

export const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

export const Form = ({ buttonText = "submit", mutate }: any) => {
  const { ...name } = useInputValue("");
  const { ...type } = useInputValue("");

  const nameInput = createInput({
    name: "name",
    ...name
  });
  const typeInput = createInput({
    name: "type",
    ...type
  });

  const submitButton = createSubmitBtn({
    onSubmit: mutate,
    name: "submit",
    state: { name: name.value, type: type.value },
    buttonText
  });
  const inputs = [nameInput, typeInput, submitButton];
  return (
    <div>
      <div>{inputs}</div>
    </div>
  );
};
