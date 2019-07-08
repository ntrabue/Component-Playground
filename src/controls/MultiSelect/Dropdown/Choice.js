import React from "react";
import { Label, Input } from "../../Form";

const Choice = ({ result, onChange, value }) => {
  return (
    <Label>
      <Input
        type="checkbox"
        value={result.value}
        onChange={() => onChange(result.value)}
        checked={value.includes(result.value)}
      />
      {result.label}
    </Label>
  );
};

export default Choice;
