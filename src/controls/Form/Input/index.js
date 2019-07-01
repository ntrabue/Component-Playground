import React, { useReducer, useEffect } from "react";
import { Default, Select, Checkbox, TextArea, Switch } from "../Inputs";

function tagReducer(state, type) {
  switch (type) {
    case "textarea":
      return { ...state, Tag: <TextArea /> };
    case "select":
      return { ...state, Tag: <Select /> };
    case "checkbox":
      return { ...state, Tag: <Checkbox /> };
    case "switch":
      return { ...state, Tag: <Switch />, type: "checkbox" };
    default:
      return { ...state, Tag: <Default /> };
  }
}

const defaultState = {
  Tag: <Default />,
  type: "text"
};

const Input = ({ type, ...attributes }) => {
  let Tag;

  switch (type) {
    case "textarea":
      Tag = TextArea;
      break;
    case "select":
      Tag = Select;
      break;
    case "checkbox":
      Tag = Checkbox;
      break;
    case "switch":
      Tag = Switch;
      type = "checkbox";
      break;
    default: {
      Tag = Default;
    }
  }

  return <Tag type={type} {...attributes} />;
};

export { Input };
