import styled from "@emotion/styled";

const Card = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #e2e3e4;
  text-decoration: none;

  box-shadow: ${({ theme }) => theme.shadow};
  margin: ${({ margin }) => (margin ? margin : "10px 0")};
  padding: ${({ padding }) => (padding ? padding : "1em")};
`;

export default Card;
