import styled from "@emotion/styled";
import { Button } from "../../Button";

export const ActionButton = styled(Button)`
  background-color: rgb(230, 230, 230);
  display: flex;
  min-width: 0px;
  box-sizing: border-box;
  border-radius: 2px;
  margin: 2px;
  max-width: 120px;
  padding: 3px;

  & span:first-of-type {
    margin-right: 10px;
  }
`;
