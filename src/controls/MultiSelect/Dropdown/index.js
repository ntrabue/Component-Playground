import React from "react";
import {
  useMultiSelectState,
  useMultiSelectDispatch
} from "../MultiSelectContext";
import ChoiceList from "./ChoiceList";
import Choice from "./Choice";

const Dropdown = () => {
  const { options } = useMultiSelectState();
  const dispatch = useMultiSelectDispatch();

  return (
    <ChoiceList>
      {options.list.map(result => (
        <Choice
          result={result}
          key={result.value}
          active={result.value === options.list[options.active].value}
          onClick={() => dispatch({ type: "add", value: result.value })}
        >
          {result.label}
        </Choice>
      ))}
    </ChoiceList>
  );
};

export default Dropdown;
