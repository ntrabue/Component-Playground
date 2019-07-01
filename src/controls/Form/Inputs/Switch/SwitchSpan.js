import styled from "@emotion/styled";

const SwitchSpan = styled.span`
  display: block;
  overflow: hidden;
  cursor: pointer;
  height: 36px;
  padding: 0;
  line-height: 36px;
  border: 2px solid #e3e3e3;
  border-radius: 36px;
  background-color: #ffffff;
  transition: background-color 0.3s ease-in;

  &::before {
    content: "";
    display: block;
    width: 36px;
    margin: 0px;
    background: #ffffff;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 42px;
    border: 2px solid #e3e3e3;
    border-radius: 36px;
    transition: all 0.3s ease-in 0s;
  }
`;

export default SwitchSpan;
