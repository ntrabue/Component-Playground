import styled from "@emotion/styled";

const CheckLabel = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  line-height: 20px;
  height: 20px;
  width: 20px;
  clear: both;
  margin: 10px;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  & span {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 20px;
    width: 20px;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.text};
  }

  & span::after {
    position: absolute;
    content: "";
    left: 12px;
    top: 12px;
    height: 0px;
    width: 0px;
    border-radius: 5px;
    border: solid #009bff;
    border-width: 0 3px 3px 0;
    transform: rotate(0deg) scale(0);
    opacity: 1;
    animation: pop-in 0.3s linear forwards;
  }

  & input:checked ~ span {
    background-color: #ffffff;
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }

  & input:checked ~ span::after {
    transform: rotate(45deg) scale(1);
    opacity: 1;
    left: 5px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid;
    border-width: 0 3px 3px 0;
    background-color: transparent;
    border-radius: 0;
  }
`;

export default CheckLabel;
