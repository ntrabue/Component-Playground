import React, { useState, useEffect } from "react";
import { ActionButton } from "./ActionButton";
import Value from "./Value";
import { useMultiSelectDispatch } from "../MultiSelectContext";

const RemoveBadge = ({ value, label, remove }) => {
  const dispatch = useMultiSelectDispatch();
  const [focused, setFocus] = useState(false);

  useEffect(() => {
    if (focused) {
      function backKey(e) {
        if (e.keyCode === 8) {
          return deleteValue(value);
        }
      }
      document.addEventListener("keyup", backKey);
      return () => document.removeEventListener("keyup", backKey);
    }
  });

  function deleteValue(value) {
    return dispatch({ type: "remove", value });
  }

  return (
    <ActionButton
      type="button"
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <Value>{label}</Value>
      <span onClick={() => deleteValue(value)}>x</span>
    </ActionButton>
  );
};

export default RemoveBadge;
