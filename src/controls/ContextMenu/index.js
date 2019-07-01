import React, { useState } from "react";
import MenuWrapper from "./MenuWrapper";
import MenuListWrapper from "./MenuListWrapper";
import MenuList from "./MenuList";
import { Button } from "../Button";

const ContextMenu = ({ title, children }) => {
  const [toggled, toggle] = useState(false);

  return (
    <MenuWrapper>
      <Button onClick={() => toggle(!toggled)}>{title}</Button>
      {toggled && (
        <MenuListWrapper>
          <MenuList>{children}</MenuList>
        </MenuListWrapper>
      )}
    </MenuWrapper>
  );
};

export default ContextMenu;
export { MenuListItem } from "./MenuListItem";
export { MenuListLink } from "./MenuListLink";
