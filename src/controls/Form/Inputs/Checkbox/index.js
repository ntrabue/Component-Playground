import React from "react";
import CheckLabel from "./CheckLabel";

export const Checkbox = props => (
  <CheckLabel>
    <input {...props} />
    <span className="checkbox-custom" />
  </CheckLabel>
);
