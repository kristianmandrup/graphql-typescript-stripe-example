import * as React from "react";
import { Input } from "../../../../ui/Input";
export const createInput = ({
  name,
  label,
  type,
  placeholder,
  value,
  onChange
}: any) => (
  <Input
    label={name || label}
    type={type || "text"}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);
