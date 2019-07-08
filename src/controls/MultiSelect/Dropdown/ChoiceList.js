import styled from "@emotion/styled";

const ChoiceList = styled.div`
  position: absolute;
  left: 0;
  top: 102%;
  width: 100%;
  max-height: 200px;
  overflow: auto;
  z-index: 50;
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export default ChoiceList;
