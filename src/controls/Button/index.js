import styled from "@emotion/styled";

function buttonColor(color, theme) {
  let state = {
    background: "transparent",
    border: "2px solid transparent",
    color: theme.colors.text
  };
  //outline default, positive, negative, prominent
  switch (color) {
    case "positive": {
      state = { ...state, background: theme.colors.green, color: "#fff" };
      break;
    }
    case "negative": {
      state = { ...state, background: theme.colors.red, color: "#fff" };
      break;
    }
    case "prominent": {
      state = { ...state, background: theme.colors.orange, color: "#fff" };
      break;
    }
    default: {
      state = { ...state, border: "2px solid #bbb" };
      break;
    }
  }

  return state;
}

export const Button = styled.button`
  display: inline-block;
  color: #fff;
  text-decoration: none;
  font-weight: normal;
  line-height: 1;
  outline: 0;
  border: 0;
  border-radius: 2px;
  background: #40cb90;
  cursor: pointer;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  padding: 8px 12px;
  transition: color 0.1s ease, border 0.1s ease, background 0.1s ease;
  font-size: ${({ size, theme }) => (size ? theme.font[size] : theme.font.reg)};
  ${({ color, theme }) => buttonColor(color, theme)};

  &:focus {
    outline: 0px;
  }
  &:hover {
    filter: brightness(120%);
  }
`;
