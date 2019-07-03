import React, { useState, useRef, useEffect } from "react";
import PopoutBackground from "./PopoutBackground";
import PopoutWrapper from "./PopoutWrapper";
import PopoutContent from "./PopoutContent";
import PopoutContainer from "./PopoutContainer";

const PopoutContext = React.createContext();
const PopoutDispatch = React.createContext();

function Popout({ children, content, ...props }) {
  const [display, toggleDisplay] = useState(false);
  const [popoutStyles, setStyles] = useState({
    top: 0,
    left: 0
  });
  const [arrow, setArrow] = useState({
    visible: true,
    placement: "bottom"
  });
  const toggleRef = useRef();
  const childRef = useRef();

  useEffect(() => {
    if (!display) return;
    window.addEventListener("resize", () => {
      const top = setY();
      const left = setX();
      const styles = { left, top };

      return setStyles(styles);
    });
    window.addEventListener("scroll", () => {
      const top = setY();
      const left = setX();
      const styles = { left, top };
      return setStyles(styles);
    });
  }, [display]);

  function hideToggle() {
    const styles = { top: 0, left: 0 };
    setStyles(styles);
    return toggleDisplay(false);
  }

  async function startToggle() {
    await toggleDisplay(true);
    const top = setY();
    const left = setX();
    const styles = { top, left };
    setStyles(styles);
  }

  function setY() {
    const toggleData = toggleRef.current.getBoundingClientRect();
    const childData = childRef.current.getBoundingClientRect();

    const fitsAbove = toggleData.top - toggleData.height > childData.height;
    const fitsBelow =
      toggleData.bottom + childData.height + 40 < window.innerHeight;
    const toggleBelow = toggleData.top > window.innerHeight - 20;
    const toggleAbove = toggleData.bottom < 0;
    const isTall = childData.height > 800;

    let top = 10;

    if (fitsBelow) {
      const arrow = { visible: true, placement: "top" };
      setArrow(arrow);
      top = toggleData.bottom + toggleData.height * 0.5;
    }
    if (fitsAbove) {
      const arrow = { visible: true, placement: "bottom" };
      setArrow(arrow);
      top = toggleData.top - toggleData.height * 0.5 - childData.height;
    }

    if (toggleBelow) {
      top = window.innerHeight - 20 - childData.height;
    }

    if (toggleAbove || isTall) {
      top = 10;
    }

    if (isTall) {
      const arrow = { visible: false, placement: "top" };
      setArrow(arrow);
    }

    return top;
  }

  function setX() {
    const toggleData = toggleRef.current.getBoundingClientRect();
    const childData = childRef.current.getBoundingClientRect();
    const toggleCenter = toggleData.width / 2;
    const childCenter = childData.width / 2;

    let left = toggleData.left;
    left = left + toggleCenter - childCenter;

    if (left < 0) {
      left = toggleData.left / 2;
    }
    if (left + childData.width > window.innerWidth) {
      const difference = left + childData.width - toggleData.right;
      left = left - difference;
    }
    return left;
  }

  return (
    <PopoutContext.Provider value={{ display }}>
      <PopoutDispatch.Provider value={hideToggle}>
        <PopoutWrapper>
          {display && (
            <PopoutBackground>
              <PopoutContainer
                onClick={e => e.stopPropagation()}
                ref={childRef}
                style={popoutStyles}
                arrow={arrow}
                {...props}
              >
                <PopoutContent>{content}</PopoutContent>
              </PopoutContainer>
            </PopoutBackground>
          )}
          <span ref={toggleRef} onClick={startToggle}>
            {children}
          </span>
        </PopoutWrapper>
      </PopoutDispatch.Provider>
    </PopoutContext.Provider>
  );
}
function usePopoutContext() {
  const context = React.useContext(PopoutContext);
  if (context === undefined) {
    throw new Error("usePopoutContext must be used within a PopoutProvider");
  }
  return context;
}

function usePopoutDispatch() {
  const context = React.useContext(PopoutDispatch);
  if (context === undefined) {
    throw new Error("usePopoutDispatch must be used within a PopoutProvider");
  }
  return context;
}

export default Popout;
export { usePopoutContext, usePopoutDispatch };
