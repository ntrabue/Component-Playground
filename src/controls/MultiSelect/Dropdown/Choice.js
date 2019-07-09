import styled from "@emotion/styled";

const Choice = styled.div`
  background-color: ${({ active }) => (active ? "#deebff" : "transparent")};
  color: ${({ theme }) => theme.colors.text};
  cursor: default;
  display: block;
  font-size: inherit;
  padding: 8px 12px;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
`;

export default Choice;
