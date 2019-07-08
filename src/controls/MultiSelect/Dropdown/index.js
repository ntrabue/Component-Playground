import React from "react";
import ChoiceList from "./ChoiceList";
import Choice from "./Choice";

const Dropdown = ({ searchValue, searchResults, onChange, value }) => {
  return (
    <ChoiceList>
      {searchValue && !searchResults ? (
        <p>No Search Results Found!</p>
      ) : (
        searchResults.map(result => (
          <Choice
            result={result}
            onChange={onChange}
            value={value}
            key={result.value}
          />
        ))
      )}
    </ChoiceList>
  );
};

export default Dropdown;
