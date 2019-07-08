import React, { useState, useEffect } from "react";
import { ActionButton } from "./ActionButton";

const RemoveBadge = ({ value, label, remove }) => {
  const [focused, setFocus] = useState(false);

  useEffect(() => {
    if (focused) {
      function backKey(e) {
        if (e.keyCode === 8) {
          return remove(value);
        }
      }
      document.addEventListener("keyup", backKey);
      return () => document.removeEventListener("keyup", backKey);
    }
  });
  return (
    <ActionButton
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onClick={() => remove(value)}
    >
      <span>{label}</span>
      <span>x</span>
    </ActionButton>
  );
};

export default RemoveBadge;
