import styled from "@emotion/styled";

const PopoutContainer = styled.div`
  position: absolute;
  display: block;
  transition: transform 0.15s ease, -webkit-transform 0.15s ease;
  transform: scale(0.95);
  pointer-events: auto;
  z-index: 21;

  &:before {
    display: ${({ arrow }) =>
      arrow.visible && arrow.placement === "top" ? "block" : "none"};
    content: "";
    height: 0px;
    width: 0px;
    bottom: 99%;
    border-style: solid;
    border-width: 10px;
    border-color: transparent;
    margin-left: -10px;
    border-top-width: 0;
    border-bottom-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }

  &:after {
    display: ${({ arrow }) =>
      arrow.visible && arrow.placement === "bottom" ? "block" : "none"};
    content: "";
    height: 0px;
    width: 0px;
    top: 99%;
    border-style: solid;
    border-width: 10px;
    border-color: transparent;
    margin-left: -10px;
    border-bottom-width: 0;
    border-top-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export default PopoutContainer;
