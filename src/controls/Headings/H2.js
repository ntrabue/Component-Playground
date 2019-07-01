import styled from "@emotion/styled";

export const H2 = styled.h2`
  font-size: ${({ theme, size }) => (size ? theme.font[size] : theme.font.lg)};
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.text};
  margin: ${({ margin }) => (margin ? margin : "15px 0")};
  text-align: ${({ align }) => (align ? align : "left")};
  font-weight: bold;
`;
