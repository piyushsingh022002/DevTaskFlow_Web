import {Navigate} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

type Props = {
    children : React.ReactNode;
}

const ProtectedRoute = ({children} : Props) =>{

    const {isAuthenticated, loading} = useAuth();

    if(loading) return <div>Loading...</div>;

    if(!isAuthenticated) return <Navigate to="/login" replace />;

    return <>{children}</>;
};

export default ProtectedRoute;