import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.tsx";
import Manufacturer from "./pages/Manufacturers.tsx";
import ConfigurationKeys from "./pages/ConfigurationKeys.tsx";
import Changelog from "./pages/Changelog.tsx";
import ApiDocumentation from "./pages/ApiDocumentation.tsx";
import Contact from "./pages/Contact.tsx";
import App from "./App.tsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: import.meta.env.VITE_GHPAGES_REPO_NAME,
    element: <App />,
    children: [
      {
        path: import.meta.env.VITE_GHPAGES_REPO_NAME,
        element: <Home />,
      },
      {
        path: `${import.meta.env.VITE_GHPAGES_REPO_NAME}manufacturers`,
        element: <Manufacturer />,
      },
      {
        path: `${import.meta.env.VITE_GHPAGES_REPO_NAME}configuration-keys`,
        element: <ConfigurationKeys />,
      },
      {
        path: `${import.meta.env.VITE_GHPAGES_REPO_NAME}changelog`,
        element: <Changelog />,
      },
      {
        path: `${import.meta.env.VITE_GHPAGES_REPO_NAME}api-documentation`,
        element: <ApiDocumentation />,
      },
      {
        path: `${import.meta.env.VITE_GHPAGES_REPO_NAME}contact`,
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
