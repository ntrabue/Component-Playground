import styled from "@emotion/styled";

export const H3 = styled.h3`
  font-size: ${({ theme, size }) => (size ? theme.font[size] : theme.font.md)};
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.text};
  margin: ${({ margin }) => (margin ? margin : "10px 0")};
  text-align: ${({ align }) => (align ? align : "left")};
  font-weight: ${({ weight }) => (weight ? weight : "500")};
`;
