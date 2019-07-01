import React, { useState } from "react";
import TooltipWrapper from "./TooltipWrapper";
import TooltipContent from "./TooltipContent";

const Tooltip = ({ children, tip, ...props }) => {
  const [toggled, toggle] = useState(false);

  function toggler() {
    return toggle(!toggled);
  }

  return (
    <TooltipWrapper>
      {toggled && <TooltipContent {...props}>{tip}</TooltipContent>}
      <span onMouseEnter={toggler} onMouseLeave={toggler}>
        {children}
      </span>
    </TooltipWrapper>
  );
};

export default Tooltip;
