import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavButtonContainer = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--color-text-primary);
  padding: 0.8rem 2rem 0.8rem 2rem;
  background-color: var(--color-nav-backgorund);
  border-radius: 15px;
`;
