import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import {
  Dashboard,
  Products,
  Purchases,
  Reports,
  Settings,
} from "./pages/Index";
import Navigator from "./components/Navigator";
import { PhoneNavigator } from "./components/Navigator";

const AppLayout = () => (
  <>
    <Navigator />
    <main>
      <Outlet />
    </main>
    <PhoneNavigator />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/Products",
        element: <Products />,
      },
      {
        path: "/Purchases",
        element: <Purchases />,
      },
      {
        path: "/Reports",
        element: <Reports />,
      },
      {
        path: "/Settings",
        element: <Settings />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
