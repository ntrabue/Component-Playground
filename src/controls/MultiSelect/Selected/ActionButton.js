import styled from "@emotion/styled";
import { Button } from "../../Button";

export const ActionButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 95%;
  padding: 10px;
  margin: 0 5px;

  & span:first-of-type {
    margin-right: 10px;
  }
`;
