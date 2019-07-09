import React, { useReducer, useEffect } from "react";

const MultiSelectState = React.createContext();
const MultiSelectReducer = React.createContext();
//TODO:
//Remove all only
//show 2 results
function stateReducer(state, action) {
  switch (action.type) {
    //set options after each search keystroke
    case "setOptions": {
      return { ...state, options: { ...state.options, list: action.value } };
    }
    //set the search value
    case "searchValue": {
      return {
        ...state,
        searchbar: { value: action.value },
        options: { ...state.options, active: 0 }
      };
    }
    //remove from the value array
    case "remove": {
      return {
        ...state,
        input: {
          ...state.input,
          current: state.input.current.filter(option => option !== action.value)
        }
      };
    }
    //add to the value array
    case "add": {
      return {
        ...state,
        searchbar: {
          value: ""
        },
        input: {
          ...state.input,
          current: [...state.input.current, action.value]
        }
      };
    }
    //clear remove all options
    case "clear": {
      return {
        ...state,
        input: {
          ...state.input,
          current: []
        }
      };
    }
    //set the active option
    case "setActive": {
      const next = action.value === "next";
      const prev = action.value === "prev";

      if (prev && state.options.active > 0) {
        return {
          ...state,
          options: {
            ...state.options,
            active: state.options.active - 1
          }
        };
      }
      if (next && state.options.active < state.options.list.length) {
        return {
          ...state,
          options: {
            ...state.options,
            active: (state.options.active += 1)
          }
        };
      }
      return state;
    }
    default: {
      throw new Error(`No action was defined for ${action.type}`);
    }
  }
}

function MultiSelectProvider({ children, value, options, onChange }) {
  const [state, setState] = useReducer(stateReducer, {
    input: {
      current: value,
      options: options
    },
    searchbar: {
      value: ""
    },
    options: {
      list: [],
      active: 0
    }
  });

  useEffect(() => {
    const uncheckedOptions = state.input.options.filter(
      option => !state.input.current.includes(option.value)
    );
    const searchMatch = uncheckedOptions.filter(option =>
      option.label.toLowerCase().startsWith(state.searchbar.value.toLowerCase())
    );
    return setState({ type: "setOptions", value: searchMatch });
  }, [state.input, state.searchbar]);

  return (
    <MultiSelectState.Provider value={state}>
      <MultiSelectReducer.Provider value={setState}>
        {children}
      </MultiSelectReducer.Provider>
    </MultiSelectState.Provider>
  );
}

function useMultiSelectState() {
  const context = React.useContext(MultiSelectState);
  if (context === undefined) {
    throw new Error(
      "useMultiSelectState must be used within an MultiSelectProvider"
    );
  }
  return context;
}

function useMultiSelectDispatch() {
  const context = React.useContext(MultiSelectReducer);
  if (context === undefined) {
    throw new Error(
      "useMultiSelectDispatch must be used within an MultiSelectProvider"
    );
  }
  return context;
}

export { MultiSelectProvider, useMultiSelectState, useMultiSelectDispatch };
