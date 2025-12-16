import { Route, Routes } from "react-router-dom";
import ROUTE_PATHS from "./RoutePaths";
import PublicRoute from "./PublicRoutes";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/DashboardPage";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import DemoPage from "../Demo/DemoPage";
import DemoForm from "../Demo/DemoForm";




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

      <Route 
        path={ROUTE_PATHS.DEMO}
        element={
          <PublicRoute>
            <DemoPage />
          </PublicRoute>
        }
      
      />

      <Route 
        path={ROUTE_PATHS.DEMO_FORM}
        element={
          <PublicRoute>
            <DemoForm />
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