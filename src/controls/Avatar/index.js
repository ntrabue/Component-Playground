import styled from "@emotion/styled";

function getSize(size, border, theme) {
  let sizeValue;
  let borderValue = "none";

  switch (size) {
    case "sm": {
      sizeValue = "25px";
      break;
    }
    case "md": {
      sizeValue = "80px";
      break;
    }
    case "lg": {
      sizeValue = "100px";
      break;
    }
    case "xl": {
      sizeValue = "120px";
      break;
    }
    default: {
      sizeValue = "50px";
    }
  }

  if (border) {
    const borderWeight = Math.round(parseInt(sizeValue) / 15);
    borderValue = `${borderWeight}px solid ${theme.colors.orange}`;
  }

  return {
    width: sizeValue,
    height: sizeValue,
    border: borderValue
  };
}

const Avatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  position: relative;

  margin: ${({ margin }) => (margin ? margin : "none")};
  ${({ size, border, theme }) => getSize(size, border, theme)}
`;

export { Avatar };
