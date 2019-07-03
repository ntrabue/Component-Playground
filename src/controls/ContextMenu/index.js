import React, { useState, useRef, useEffect } from "react";
import MenuWrapper from "./MenuWrapper";
import MenuListWrapper from "./MenuListWrapper";
import MenuList from "./MenuList";
import { Button } from "../Button";

const ContextMenu = ({ title, children }) => {
  const menuRef = useRef();
  const [toggled, toggle] = useState(false);

  useEffect(() => {
    if (!toggled) return;
    document.addEventListener("mousedown", handleClick);
  }, [toggled]);

  function handleClick(e) {
    if (menuRef.current.contains(e.target)) {
      return;
    } else {
      toggle(false);
    }
  }

  return (
    <MenuWrapper ref={menuRef}>
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
