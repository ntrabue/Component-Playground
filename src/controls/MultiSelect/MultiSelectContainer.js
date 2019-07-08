import styled from "@emotion/styled";

const MultiSelectContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease in out;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.font};
  position: relative;

  & input[type="search"] {
    flex-grow: 1;
  }
`;

export default MultiSelectContainer;
