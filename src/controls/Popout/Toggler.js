import React from "react";
import { usePopoutContext, usePopoutDispatch } from "./";

const Toggler = () => {
  const { toggler } = usePopoutContext();
  const toggle = usePopoutDispatch();

  return <span onClick={toggle}>{toggler}</span>;
};

export default Toggler;
