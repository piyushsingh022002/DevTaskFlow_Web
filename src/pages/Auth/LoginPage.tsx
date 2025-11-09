// src/pages/Auth/LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATHS from '../../routes/RoutePaths';
import { useAuthContext } from '../../context/AuthContext';
import {
  LoginContainer,
  LoginBox,
  Title,
  Form,
  InputGroup,
  Label,
  Input,
  Button,
  ErrorText,
} from './LoginPage.styles';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Hardcoded credentials for demo
    const demoUser = {
      username: 'admin',
      password: '12345',
    };

    if (username === demoUser.username && password === demoUser.password) {
      login(); // sets isAuthenticated = true in AuthContext
      navigate(ROUTE_PATHS.DASHBOARD_MAIN);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Sign In</Title>
        <Form onSubmit={handleLogin}>
          <InputGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </InputGroup>

          {error && <ErrorText>{error}</ErrorText>}

          <Button type="submit">Login</Button>
        </Form>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;
