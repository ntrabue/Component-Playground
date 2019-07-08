import styled from "@emotion/styled";

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => (margin ? margin : "0px")};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.font.regular};
`;
