import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RequireAuth from "./components/etc/RequireAuth";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import Member from "./pages/Member";
import Messages from "./pages/Messages";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import Shop from "./pages/Shop";
import Test from "./pages/Test";
import Register from "./pages/Auth/register";
import Sales from './pages/Sales/index';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
      <MainLayout />
      </RequireAuth>
    ),
    children: [
      {/*
        path: "",
        element: <Dashboard />,
      */},
      {
        path: "",
        element: <Sales />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      
      {
        path: "/member",
        element: <Member />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="login" />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
