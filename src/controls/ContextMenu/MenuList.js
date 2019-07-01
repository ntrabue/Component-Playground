import styled from "@emotion/styled";

const MenuList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  box-shadow: ${({ theme }) => theme.shadow};
  width: 180px;
  max-width: 100%;
  position: relative;
`;

export default MenuList;
