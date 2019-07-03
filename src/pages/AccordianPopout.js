import React from "react";
import { usePopoutDispatch } from "../controls/Popout";
import Accordian from "../controls/Accordian";
import { Block } from "../controls/Layout";

const AccordianPopout = () => {
  const dispatch = usePopoutDispatch();
  return (
    <Accordian title="You can use accordians in popouts">
      <p>Pretty neat huh?</p>
    </Accordian>
  );
};

export default AccordianPopout;
