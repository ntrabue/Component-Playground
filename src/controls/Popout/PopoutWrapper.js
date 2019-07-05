import React, { useRef, useReducer, useEffect } from "react";
import { usePopoutContext, usePopoutDispatch } from "./";
import PopoutWrapperStyle from "./PopoutWrapperStyle";
import PopoutBackground from "./PopoutBackground";
import PopoutContainer from "./PopoutContainer";
import PopoutContent from "./PopoutContent";

const defaultPosition = {
  styles: {
    top: 0,
    left: 0
  },
  arrow: {
    visible: true,
    position: "top"
  }
};

function positionReducer(state, action) {
  const toggle = action.toggle;
  const popout = action.popout;
  const windowData = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  let left = toggle.left;
  let top = 10;
  let arrowVisible = true;
  let arrowDirection = "top";

  const fitsAbove = toggle.top - toggle.height > popout.height;
  const fitsBelow = toggle.bottom + popout.height + 40 < windowData.height;
  const toggleAboveContent = toggle.bottom < 0;
  const toggleBelowContent = toggle.top > windowData.height - 20;
  const tooTall = popout.height > 800;

  if (fitsBelow) {
    arrowVisible = true;
    arrowDirection = "top";
    top = toggle.bottom + toggle.height * 0.5;
  }
  if (fitsAbove) {
    arrowVisible = true;
    arrowDirection = "bottom";
    top = toggle.top - toggle.height * 0.5 - popout.height;
  }

  if (toggleBelowContent) {
    top = windowData.height - 20 - popout.height;
  }

  if (toggleAboveContent || tooTall) {
    top = 10;
  }

  if (tooTall) {
    arrowVisible = false;
  }

  const toggleCenter = toggle.width / 2;
  const popoutCenter = popout.width / 2;

  left = left + toggleCenter - popoutCenter;

  if (left < 0) {
    left = toggle.left / 2;
  }
  if (left + popout.width > windowData.width) {
    const difference = left + popout.width - toggle.right;
    left = left - difference;
  }
  return {
    ...state,
    styles: {
      top,
      left
    },
    arrow: {
      visible: arrowVisible,
      position: arrowDirection
    }
  };
}

const PopoutWrapper = () => {
  const toggleRef = useRef();
  const popoutRef = useRef();
  const { display, content, toggler } = usePopoutContext();
  const dispatch = usePopoutDispatch();

  const [position, setPosition] = useReducer(positionReducer, defaultPosition);

  useEffect(() => {
    if (display) {
      function getRefData() {
        const data = {
          popout: popoutRef.current.getBoundingClientRect(),
          toggle: toggleRef.current.getBoundingClientRect()
        };
        return setPosition(data);
      }
      getRefData();
      window.addEventListener("scroll", getRefData);
      window.addEventListener("resize", getRefData);
      return () => {
        window.removeEventListener("scroll", getRefData);
        window.removeEventListener("resize", getRefData);
      };
    }
  }, [display]);

  return (
    <PopoutWrapperStyle>
      {display && (
        <PopoutBackground onClick={() => dispatch(false)}>
          <PopoutContainer
            onClick={e => e.stopPropagation()}
            ref={popoutRef}
            style={position.styles}
            arrow={position.arrow}
          >
            <PopoutContent>{content}</PopoutContent>
          </PopoutContainer>
        </PopoutBackground>
      )}
      <span ref={toggleRef} onClick={() => dispatch(true)}>
        {toggler}
      </span>
    </PopoutWrapperStyle>
  );
};

export default PopoutWrapper;
