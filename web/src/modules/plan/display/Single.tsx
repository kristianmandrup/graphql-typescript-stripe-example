import * as React from "react";
import { Title } from "../../../ui/Title";
import { Plan } from "./Plan";
import { Delete, Update } from "../edit";

export const Single = (plan: Plan) => {
  const {
    nickname,
    active,
    currency,
    amount,
    interval,
    product,
    trial_period_days,
    usage_type
  } = plan;
  return (
    <div className="plan">
      <Title>{nickname}</Title>
      <div>{active}</div>
      <div>{currency}</div>
      <div>{amount}</div>
      <div>{interval}</div>
      <div>{product}</div>
      <div>{trial_period_days}</div>
      <div>{usage_type}</div>
      <Update />
      <Delete />
    </div>
  );
};
