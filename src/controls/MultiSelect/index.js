import React, { useState, useRef, useEffect } from "react";
import { Label } from "../Form";
import MultiSelectContainer from "./MultiSelectContainer";
import Searchbar from "./Searchbar";
import Selected from "./Selected";
import Dropdown from "./Dropdown";

const MultiSelect = ({ label, options, value, onChange }) => {
  const multiSelect = useRef();
  const [focusing, changeFocus] = useState(false);
  const [searching, startSearch] = useState(false);
  const [searchValue, changeSearch] = useState("");
  const [searchResults, changeResults] = useState([]);

  useEffect(() => {
    const uncheckedOptions = options.filter(
      option => !value.includes(option.value)
    );
    const searchMatch = uncheckedOptions.filter(option =>
      option.label.toLowerCase().startsWith(searchValue.toLowerCase())
    );
    changeResults(searchMatch);
  }, [searchValue, options, value]);

  useEffect(() => {
    changeSearch("");
  }, [value]);

  useEffect(() => {
    if (focusing) {
      function clickHandler(e) {
        if (!multiSelect.current.contains(e.target)) {
          startSearch(false);
          changeSearch("");
          changeFocus(false);
          return changeFocus(false);
        }
        return;
      }
      startSearch(true);
      document.addEventListener("mousedown", clickHandler);
      return () => {
        document.removeEventListener("mousedown", clickHandler);
      };
    }
  }, [focusing]);

  return (
    <React.Fragment>
      <Label>{label}</Label>
      <MultiSelectContainer>
        <Selected options={options} value={value} onChange={onChange} />
        <div ref={multiSelect} onFocus={() => changeFocus(true)}>
          <Searchbar
            type="search"
            value={searchValue}
            onChange={e => changeSearch(e.target.value)}
          />
          {searching && (
            <Dropdown
              searchValue={searchValue}
              searchResults={searchResults}
              onChange={onChange}
              value={value}
            />
          )}
        </div>
      </MultiSelectContainer>
    </React.Fragment>
  );
};

export default MultiSelect;
