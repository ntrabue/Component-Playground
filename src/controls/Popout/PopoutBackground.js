import React from "react";
import styled from "@emotion/styled";
import { usePopoutDispatch } from "./";

const PopoutBackgroundStyle = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const PopoutBackground = () => {
  const dispatch = usePopoutDispatch();
  return <PopoutBackgroundStyle onClick={() => dispatch(false)} />;
};

export default PopoutBackground;
