import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import RequireAuth from "./components/etc/RequireAuth";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Member from "./pages/Member";
import Messages from "./pages/Messages";
import NotFound from "./pages/NotFound";
import Order from "./pages/Order";
import Shop from "./pages/Shop";
import Test from "./pages/Test";
import Settings from "./pages/Settings";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      //<RequireAuth>
      <MainLayout />
      //</RequireAuth>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/order",
        element: <Order />,
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
