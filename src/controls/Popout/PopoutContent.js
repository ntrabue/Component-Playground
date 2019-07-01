import styled from "@emotion/styled";

const PopoutContent = styled.div`
  position: absolute;
  bottom: 130%;
  width: 200px;
  max-width: 250px;
  z-index: 50000;
  background: #fff;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export default PopoutContent;
