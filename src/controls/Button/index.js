import styled from "@emotion/styled";

export const Button = styled.button`
  position: relative;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  transition: all 0.15s ease-in-out;

  margin: ${({ margin }) => (margin ? margin : "0px")};
  background: ${({ background, theme }) =>
    background ? theme.colors[background] : theme.colors.green};
  color: ${({ color, theme }) => (color ? theme.colors[color] : "#fff")};
  border: ${({ border, theme }) =>
    border ? theme.colors[border] : "1px solid transparent"};

  &:focus {
    outline: 0px;
  }
  &:hover {
    filter: brightness(85%);
  }
`;
