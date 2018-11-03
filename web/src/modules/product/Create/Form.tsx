import * as React from "react";
import { RedButton } from "../../../ui/RedButton";
import { createInput } from "../../../ui/form/input";
import { useInputValue } from "../../../ui/form/useInputValue";

const createSubmitBtn = ({ onSubmit, state, key, buttonText }: any) => {
  return (
    <RedButton key={key} onClick={() => onSubmit(state)}>
      {buttonText}
    </RedButton>
  );
};

export default ({ buttonText = "submit", onSubmit }: any) => {
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
    onSubmit,
    key: "submit",
    state: { name: name.value, type: type.value },
    buttonText
  });
  const form = [nameInput, typeInput, submitButton];
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
