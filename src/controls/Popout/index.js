import React, { useState } from "react";
import PopoutBackground from "./PopoutBackground";
import PopoutWrapper from "./PopoutWrapper";
import PopoutContent from "./PopoutContent";

const PopoutContext = React.createContext();
const PopoutDispatch = React.createContext();

function Popout({ children, content }) {
  const [toggled, toggle] = useState(false);

  return (
    <PopoutContext.Provider value={toggled}>
      <PopoutDispatch.Provider value={toggle}>
        {toggled && <PopoutBackground />}
        <PopoutWrapper>
          {toggled && <PopoutContent>{content}</PopoutContent>}
          <span
            onClick={() => {
              toggle(true);
            }}
          >
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
