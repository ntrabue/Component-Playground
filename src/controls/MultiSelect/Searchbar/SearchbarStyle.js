import styled from "@emotion/styled";

const SearchbarStyle = styled.input`
  display: block;
  font-size: ${({ theme }) => theme.font.md};
  background-clip: padding-box;
  text-indent: 8px;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.font};
  height: calc(1.5em + 0.75rem + 2px);
  min-width: 25%;
  flex-grow: 1;

  &:focus {
    outline: none;
  }
`;

export default SearchbarStyle;
