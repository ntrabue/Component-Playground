import styled from "@emotion/styled";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => (justify ? justify : "left")};
  align-items: ${({ align }) => (align ? align : "flex-start")};
  margin: ${({ margin }) => (margin ? margin : "0px")};
  padding: ${({ padding }) => (padding ? padding : "0px")};
  background-color: ${({ background, theme }) =>
    background ? theme.colors[background] : "none"};
`;
