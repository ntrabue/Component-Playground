import React, { useRef, useState, useEffect } from "react";
import { Label } from "../Form";
import { MultiSelectProvider } from "./MultiSelectContext";
import MultiSelectContainer from "./MultiSelectContainer";
import Selected from "./Selected";
import Searchbar from "./Searchbar";
import Dropdown from "./Dropdown";

const MultiSelect = ({ label, options, value, onChange }) => {
  const multiSelect = useRef();
  const [toggled, toggle] = useState(false);

  useEffect(() => {
    if (toggled) {
      function clickHandler(e) {
        if (multiSelect.current.contains(e.target)) {
          return;
        } else {
          toggle(false);
        }
      }
      document.addEventListener("mousedown", clickHandler);
      return () => document.removeEventListener("mousedown", clickHandler);
    }
  }, [toggled]);

  return (
    <MultiSelectProvider options={options} value={value} onChange={onChange}>
      <Label>{label}</Label>
      <MultiSelectContainer ref={multiSelect} onFocus={() => toggle(true)}>
        <Selected />
        <Searchbar />
        {toggled && <Dropdown />}
      </MultiSelectContainer>
    </MultiSelectProvider>
  );
};

export default MultiSelect;
