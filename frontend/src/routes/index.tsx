import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import AuthLayout from "@/components/auth/layout";
import { AppLayout } from "@/components/commom/appLayout";
import VehiclesPage from "@/pages/vehicles";
import UsersPage from "@/pages/users";
import PricesPage from "@/pages/prices";
import SettingsPage from "@/pages/settings";
import Remind from "@/pages/auth/remind";

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
      {
        path: "/remind-login",
        element: <Remind />,
      }
    ],
  },
  {
    element: <AppLayout />,
    children: [
        {
            path: "/vehicles",
            element: <VehiclesPage />,
        },
        {
            path: "/users",
            element: <UsersPage />,
        },
        {
            path: "/prices",
            element: <PricesPage />,
        },
        {
            path: "/settings",
            element: <SettingsPage />,
        },
    ],
  },
]);
