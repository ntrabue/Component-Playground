import styled from "@emotion/styled";

function tooltipPosition(location) {
  switch (location) {
    case "bottom": {
      return {
        top: "125%"
      };
    }
    default: {
      return {
        bottom: "125%"
      };
    }
  }
}

function arrowProps(location, theme) {
  return location && location === "bottom"
    ? {
        top: "-8%",
        borderBottom: `5px solid ${theme.colors.text}`
      }
    : {
        bottom: "-8%",
        borderTop: `5px solid ${theme.colors.text}`
      };
}

const TooltipContent = styled.span`
  position: absolute;
  z-index: 50;
  font-size: ${({ theme }) => theme.font.sm};
  color: #fff;
  box-shadow: ${({ theme }) => theme.shadow};
  background: ${({ theme }) => theme.colors.text};
  /* background: black; */
  padding: 5px 10px;
  width: 100px;
  max-width: 200px;
  text-align: center;
  left: 0%;

  ${({ location }) => tooltipPosition(location)}

  &:before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    left: 45%;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    ${({ location, theme }) => arrowProps(location, theme)}
  }
`;

export default TooltipContent;
