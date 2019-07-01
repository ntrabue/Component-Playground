import React from "react";
import SwitchInput from "./SwitchInput";
import SwitchLabel from "./SwitchLabel";
import SwitchSpan from "./SwitchSpan";

export const Switch = attributes => {
  return (
    <SwitchLabel>
      <SwitchInput {...attributes} />
      <SwitchSpan />
    </SwitchLabel>
  );
};
