import React, { useEffect, useState } from "react";
import SearchbarStyle from "./SearchbarStyle";
import {
  useMultiSelectState,
  useMultiSelectDispatch
} from "../MultiSelectContext";

const Searchbar = () => {
  const { input, searchbar, options } = useMultiSelectState();
  const setState = useMultiSelectDispatch();
  const [focused, setFocus] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const active = options.list[options.active];

  useEffect(() => {
    if (focused) {
      function checkKey(e) {
        const back = e.keyCode === 8;
        const enter = e.keyCode === 13;
        const up = e.keyCode === 38;
        const down = e.keyCode === 40;

        if (back && !searchbar.value && !deleting) {
          setDeleting(true);
        }
        if (deleting && searchbar.value) {
          setDeleting(false);
        }
        if (back && deleting && input.current.length > 0) {
          setState({
            type: "remove",
            value: input.current[input.current.length - 1]
          });
        }
        if (enter) {
          if (active) {
            return setState({
              type: "add",
              value: active.value
            });
          }
        }
        if (up) {
          return setState({
            type: "setActive",
            value: "prev"
          });
        }
        if (down) {
          return setState({
            type: "setActive",
            value: "next"
          });
        }
      }
      document.addEventListener("keyup", checkKey);
      return () => document.removeEventListener("keyup", checkKey);
    }
  });

  function setSearch(e) {
    setState({ type: "searchValue", value: e.target.value });
  }

  return (
    <SearchbarStyle
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      value={searchbar.value}
      onChange={setSearch}
    />
  );
};

export default Searchbar;
