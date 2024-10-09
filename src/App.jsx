import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RequireAuth from './components/etc/RequireAuth';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Member from './pages/Member';
import Messages from './pages/Messages';
import NotFound from './pages/NotFound';
import Order from './pages/Order';
import Shop from './pages/Shop';
import Test from './pages/Test';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <MainLayout />
    ),
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/shop',  
        element: <Shop />,
      },
      {
        path: '/order',
        element: <Order />,
      },
      {
        path: '/member',
        element: <Member />,
      },
      {
        path: '/messages',
        element: <Messages />,
      },
      {
        path: '/test',
        element: <Test />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
