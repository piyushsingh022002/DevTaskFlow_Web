import { lazy, Suspense } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import ROUTE_PATHS from './RoutePaths';
import ProtectedRoute from './ProtectesRoute';
import AuthLayout from '../components/layout/AuthLayout';
import DashboardLayout from '../components/layout/DashboardLayout';
import { useAuthContext } from '../context/AuthContext';

// Lazy-load pages for better performance
const LoginPage = lazy(() => import('../pages/Auth/LoginPage'));
const RegisterPage = lazy(() => import('../pages/Auth/RegisterPage'));
const DashboardLanding = lazy(() => import('../pages/Dashboard/DashboardLanding'));
const DashboardPage = lazy(() => import('../pages/Dashboard/DashboardPage'));
const SettingsPage = lazy(() => import('../pages/Dashboard/SettingPage'));
const AboutPage = lazy(() => import('../pages/About/AboutPage'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFoundPage'));

const AppRoutes = () => {
  const { isAuthenticated } = useAuthContext();

  const routes = useRoutes([
    // Root: redirect depending on auth state
    {
      path: ROUTE_PATHS.ROOT,
      element: (
        <Navigate to={isAuthenticated ? ROUTE_PATHS.DASHBOARD_MAIN : ROUTE_PATHS.DASHBOARD_LANDING} replace />
      ),
    },

    // Auth pages (login/register) wrapped in AuthLayout
    {
      element: <AuthLayout />,
      children: [
        { path: ROUTE_PATHS.LOGIN, element: <LoginPage /> },
        { path: ROUTE_PATHS.REGISTER, element: <RegisterPage /> },
      ],
    },

    // Public dashboard landing and about
    { path: ROUTE_PATHS.DASHBOARD_LANDING, element: <DashboardLanding /> },
    { path: ROUTE_PATHS.ABOUT, element: <AboutPage /> },

    // Protected dashboard area
    {
      element: <ProtectedRoute />,
      children: [
        {
          element: <DashboardLayout />,
          children: [
            { path: ROUTE_PATHS.DASHBOARD_MAIN, element: <DashboardPage /> },
            { path: ROUTE_PATHS.SETTINGS, element: <SettingsPage /> },
          ],
        },
      ],
    },

    // Fallback
    { path: '*', element: <NotFoundPage /> },
  ]);

  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
};

export default AppRoutes;
