import { Navigate } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';

type Props = {
  children: React.ReactNode;
};

const PublicRoute = ({ children }: Props) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (isAuthenticated) return <Navigate to="/dashboard/main" replace />;

  return <>{children}</>;
};

export default PublicRoute;
