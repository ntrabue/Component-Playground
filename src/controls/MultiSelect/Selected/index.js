import React from "react";
import RemoveButton from "./RemoveButton";

const Selected = ({ value, options, onChange }) => {
  return !value || value.length === 0
    ? null
    : value.map(choice => {
        const option = options.filter(option => option.value === choice)[0];
        return (
          <RemoveButton
            label={option.label}
            value={option.value}
            key={option.value}
            remove={onChange}
          />
        );
      });
};

export default Selected;
