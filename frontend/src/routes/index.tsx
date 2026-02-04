import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import AuthLayout from "@/components/auth/layout";
import { AppLayout } from "@/components/commom/appLayout";
import VehiclesPage from "@/pages/vehicles";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
        {
            path: "/vehicles",
            element: <VehiclesPage />,
        },
    ],
  },
]);
