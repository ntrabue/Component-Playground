import styled from "@emotion/styled";

const SwitchLabel = styled.label`
  display: block;
  position: relative;
  width: 80px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  & input:checked ~ span {
    background-color: #49e845;
  }

  & input:checked ~ span::before {
    right: 0px;
  }
`;

export default SwitchLabel;
