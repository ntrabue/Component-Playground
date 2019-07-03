import styled from "@emotion/styled";

export const TextArea = styled.textarea`
  display: flex;
  width: 100%;
  height: 145px;
  border: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.font.md};
  color: ${({ theme }) => theme.colors.text};
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
