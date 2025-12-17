import styled from 'styled-components';
import type { ThemeMode } from '../../context/ThemeContext';

interface HeaderContainerProps {
  theme: ThemeMode;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#282c34')};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    color: inherit;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ThemeButton = styled.button`
  background-color: #61dafb;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  color: #282c34;

  &:hover {
    background-color: #21a1f1;
  }
`;

export const SignInButton = styled.button`
  background-color: #4caf50;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  color: white;

  &:hover {
    background-color: #45a049;
  }
`;