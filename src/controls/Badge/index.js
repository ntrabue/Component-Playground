import styled from "@emotion/styled";

function badgeType(type, size, theme) {
  let state = {
    padding: "0.25em 0.4em",
    backgroundColor: theme.colors.text,
    color: "#fff",
    fontSize: theme.font.reg
  };

  switch (size) {
    case "sm": {
      state = { ...state, fontSize: theme.font.sm };
      break;
    }
    case "md": {
      state = { ...state, fontSize: theme.font.md };
      break;
    }
    case "lg": {
      state = { ...state, fontSize: theme.font.lg };
      break;
    }
    case "xl": {
      state = { ...state, fontSize: theme.font.xl };
      break;
    }
    default:
      break;
  }

  switch (type) {
    case "red": {
      state = { ...state, backgroundColor: theme.colors.red };
      break;
    }
    case "transparent": {
      state = {
        ...state,
        backgroundColor: theme.colors.transparent,
        color: theme.colors.text
      };
      break;
    }
    case "orange": {
      state = { ...state, backgroundColor: theme.colors.orange };
      break;
    }
    case "yellow": {
      state = { ...state, backgroundColor: theme.colors.yellow };
      break;
    }
    case "green": {
      state = { ...state, backgroundColor: theme.colors.green };
      break;
    }
    default:
      break;
  }

  return state;
}

const Badge = styled.span`
  display: inline-block;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: all 0.15s ease-in-out;

  ${({ type, size, theme }) => badgeType(type, size, theme)}
`;

export { Badge };
