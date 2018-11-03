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

// currency,
// interval,
// product,
// nickname,
// amount
export default ({ buttonText = "submit", onSubmit }: any) => {
  const { ...nickname } = useInputValue("");
  const { ...amount } = useInputValue("");
  const { ...product } = useInputValue("");
  const { ...interval } = useInputValue("");

  const nameInput = createInput({
    name: "nickname",
    ...nickname
  });
  const amountInput = createInput({
    name: "amount",
    ...amount
  });
  const productInput = createInput({
    name: "product",
    ...product
  });
  const intervalInput = createInput({
    name: "interval",
    ...interval
  });

  const submitButton = createSubmitBtn({
    onSubmit,
    key: "submit",
    state: {
      nickname: nickname.value,
      amount: amount.value,
      product: product.value,
      interval: interval.value
    },
    buttonText
  });
  const form = [
    nameInput,
    amountInput,
    productInput,
    intervalInput,
    submitButton
  ];
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
