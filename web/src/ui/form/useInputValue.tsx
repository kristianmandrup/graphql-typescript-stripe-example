import { useState } from "react";

export const useInputValue = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (e: any) => setValue(e.target.value),
    resetValue: () => setValue("")
  };
};
