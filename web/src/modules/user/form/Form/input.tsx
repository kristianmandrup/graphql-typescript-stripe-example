import * as React from "react";
import { Input } from "../../../../ui/Input";
export const createInput = ({
  name,
  label,
  type,
  placeholder,
  value,
  key,
  onChange
}: any) => (
  <Input
    key={key}
    label={name || label}
    type={type || "text"}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);
