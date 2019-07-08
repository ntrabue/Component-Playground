import React, { useState } from "react";
import MultiSelect from "../controls/MultiSelect";

const data = [
  {
    _id: "1",
    name: "Jon Doe"
  },
  {
    _id: "2",
    name: "Jane Doe"
  },
  {
    _id: "3",
    name: "Jon Snow"
  },
  {
    _id: "4",
    name: "Samwell Tarley"
  },
  {
    _id: "5",
    name: "Ned Stark"
  },
  {
    _id: "6",
    name: "Brandon Stark"
  },
  {
    _id: "7",
    name: "Test Guy"
  },
  {
    _id: "8",
    name: "Another Test"
  },
  {
    _id: "9",
    name: "Arya Stark"
  },
  {
    _id: "10",
    name: "Sansa Stark"
  }
];

const MultiSelectContainer = () => {
  const options = data.map(option => ({
    label: option.name,
    value: option._id
  }));
  const current = [options[0].value];
  const [selected, setSelected] = useState(current);

  function handleChange(value) {
    if (!selected.includes(value)) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter(option => option !== value));
    }
  }

  return (
    <MultiSelect
      label="Select a Person"
      value={selected}
      options={options}
      onChange={handleChange}
    />
  );
};

export default MultiSelectContainer;
