import React, { useState } from "react";
import PopoutWrapper from "./PopoutWrapper";

const PopoutContext = React.createContext();
const PopoutDispatch = React.createContext();

function Popout({ children, content }) {
  const [display, togglePopout] = useState(false);

  return (
    <PopoutContext.Provider value={{ display, toggler: children, content }}>
      <PopoutDispatch.Provider value={togglePopout}>
        <PopoutWrapper />
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
