import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f9fafc;
`;

const AuthLayout = () => (
  <AuthContainer>
    <Outlet /> {/* renders Login/Register */}
  </AuthContainer>
);

export default AuthLayout;
