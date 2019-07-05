import styled from "@emotion/styled";

const PopoutBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
  padding: 0 15px;
  opacity: 1;
  -webkit-transition: opacity 0.2s ease;
  transition: opacity 0.2s ease;
`;

export default PopoutBackground;
