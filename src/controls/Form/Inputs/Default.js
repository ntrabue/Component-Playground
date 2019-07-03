import styled from "@emotion/styled";

export const Default = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  font-size: ${({ theme }) => theme.font.md};
  background-color: #fff;
  background-clip: padding-box;
  text-indent: 8px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.font};

  &:focus {
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
