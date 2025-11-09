import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Buttons } from './DashboardLanding.styles';
import ROUTE_PATHS from '../../routes/RoutePaths';

const DashboardLanding: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Card>
        <h1>DevTaskFlow</h1>
        <p>Welcome — sign in or learn more about the project.</p>
        <Buttons>
          <button onClick={() => navigate(ROUTE_PATHS.LOGIN)}>Login</button>
          <button onClick={() => navigate(ROUTE_PATHS.ABOUT)}>About</button>
          <button disabled>Register</button>
        </Buttons>
      </Card>
    </Container>
  );
};

export default DashboardLanding;
