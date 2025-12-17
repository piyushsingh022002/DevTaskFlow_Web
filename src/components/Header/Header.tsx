import React, { useContext } from 'react';
import { HeaderContainer, NavLinks, ThemeButton, SignInButton } from './Header.styles';
import { ThemeContext } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSignIn = () => {
    window.location.href = '/login';
  };

  return (
    <HeaderContainer theme={theme}>
      <h1>DevTaskFlow</h1>
      <NavLinks>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/dashboard">Dashboard</a>
      </NavLinks>
      <div>
        <ThemeButton onClick={toggleTheme}>Toggle Theme</ThemeButton>
        <SignInButton onClick={handleSignIn}>Sign In</SignInButton>
      </div>
    </HeaderContainer>
  );
};

export default Header;