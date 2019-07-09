import React from "react";
import RemoveButton from "./RemoveButton";
import { useMultiSelectState } from "../MultiSelectContext";

const Selected = () => {
  const { input } = useMultiSelectState();

  if (!input.current || input.current.length === 0) return null;

  return input.current.map(choice => {
    const option = input.options.filter(option => option.value === choice)[0];
    return (
      <RemoveButton
        label={option.label}
        value={option.value}
        key={option.value}
      />
    );
  });
};

export default Selected;
