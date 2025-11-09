import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  Content,
  ErrorCode,
  Message,
  Description,
  HomeButton,
} from './NotFound.Style';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Content>
        <ErrorCode>404</ErrorCode>
        <Message>Page Not Found</Message>
        <Description>
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </Description>
        <HomeButton onClick={() => navigate('/')}>
          Go Home
        </HomeButton>
      </Content>
    </Wrapper>
  );
};

export default NotFoundPage;
