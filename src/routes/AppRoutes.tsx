import { Route, Routes } from "react-router-dom";
import ROUTE_PATHS from "./RoutePaths";
import PublicRoute from "./PublicRoutes";
import ProtectedRoute from "./ProtectesRoute";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/DashboardPage";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";




const AppRoutes = () =>{
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path={ROUTE_PATHS.LOGIN}
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route
        path={ROUTE_PATHS.REGISTER}
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />

      {/* Home could be public or protected depending on your app */}
      <Route path={ROUTE_PATHS.ROOT} element={<Home />} />

      {/* Protected Routes */}
      <Route
        path={ROUTE_PATHS.DASHBOARD}
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>

  );
};

export default AppRoutes;