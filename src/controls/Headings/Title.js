import styled from "@emotion/styled";

export const Title = styled.h1`
  margin-top: 0px;
  font-size: ${({ theme }) => theme.font.xl};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.orange};
`;
