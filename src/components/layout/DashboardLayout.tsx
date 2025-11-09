import { Outlet, Link } from 'react-router-dom';
import ROUTE_PATHS from '../../routes/RoutePaths';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.nav`
  width: 200px;
  background: #1e293b;
  color: #fff;
  padding: 1rem;
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
`;

const DashboardLayout = () => (
  <Container>
    <Sidebar>
      <h3>Menu</h3>
      <ul>
          <li><Link to={ROUTE_PATHS.DASHBOARD_MAIN}>Dashboard</Link></li>
        <li><Link to={ROUTE_PATHS.SETTINGS}>Settings</Link></li>
      </ul>
    </Sidebar>
    <Content>
      <Outlet /> {/* renders DashboardPage or SettingsPage */}
    </Content>
  </Container>
);

export default DashboardLayout;
