// src/pages/Login.jsx
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login and setting token
    const token = 'jwt-token-here'; // Replace this with the real token from API response

    // Store token in a cookie with options
    Cookies.set('authToken', token, {
      expires: 1, // Expires in 1 day
      secure: process.env.NODE_ENV === 'production', // Secure cookie in production
      sameSite: 'Strict', // SameSite attribute for CSRF protection
    });

    // Redirect to home page after login
    navigate('/');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;