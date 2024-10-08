import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const RequireAuth = ({ children }) => {
  const token = Cookies.get('authToken');
  
  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default RequireAuth;
