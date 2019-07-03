import React, { useState } from "react";
import { H3, HR } from "../Headings";
import AccordianHeader from "./AccordianHeader";
import AccordianWrapper from "./AccordianWrapper";
import AccordianBody from "./AccordianBody";

const Accordian = ({ defaultExpand, title, children }) => {
  const [expanded, expand] = useState(false);

  return (
    <AccordianWrapper>
      <AccordianHeader
        onClick={() => expand(!expanded)}
        justify="space-between"
        align="center"
      >
        <H3>{title}</H3>
        <span>{expanded ? "-" : "+"}</span>
      </AccordianHeader>

      {expanded && <AccordianBody>{children}</AccordianBody>}
      <HR />
    </AccordianWrapper>
  );
};

export default Accordian;
