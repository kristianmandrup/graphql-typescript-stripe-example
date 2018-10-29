import * as React from "react";
import { RedButton } from "../../../../ui/RedButton";
import { createInput } from "./input";
import { useInputValue } from "./useInputValue";
// interface Props {
//   onSubmit: (data: State) => void;
//   buttonText: string;
// }

const createSubmitBtn = ({ onSubmit, state, buttonText }: any) => {
  return <RedButton onClick={() => onSubmit(state)}>{buttonText}</RedButton>;
};

// TODO: change into new Hook style component (function)
export default ({ buttonText, onSubmit }: any) => {
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
    state: { email, password },
    buttonText
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div>{[emailInput, passwordInput, submitButton]}</div>
    </div>
  );
};
