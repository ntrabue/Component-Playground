import styled from "@emotion/styled";
import { Link } from "@reach/router";

export const MenuListLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding: 0.75rem;
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryText};
    color: #fff;
  }
`;
