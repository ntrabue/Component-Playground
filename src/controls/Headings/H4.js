import styled from "@emotion/styled";

export const H4 = styled.h4`
  font-size: ${({ theme, size }) => (size ? theme.font[size] : theme.font.sm)};
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.text};
  margin: ${({ margin }) => (margin ? margin : "5px 0")};
  text-align: ${({ align }) => (align ? align : "left")};
  font-weight: bold;
  text-transform: uppercase;
`;
