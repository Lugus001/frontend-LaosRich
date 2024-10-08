import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
//import AuthLayout from './layouts/AuthLayout';
import Home from './pages/Home';
//import Login from './pages/Auth/Login.html';
//import Register from './pages/Auth/Register.html';
import Test from './pages/Test';
import NotFound from './pages/NotFound';
import RequireAuth from './components/etc/RequireAuth';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <MainLayout />
      </RequireAuth>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {/*
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  */},
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;