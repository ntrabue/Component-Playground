import React, { useState } from "react";
import { H2 } from "../controls/Headings";
const TestModal = ({ cb }) => {
  const [value, changeValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    //Do things here//
    cb();
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={value} onChange={e => changeValue(e.target.value)} />
    </form>
  );
};

export default TestModal;
