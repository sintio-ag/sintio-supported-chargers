import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";

import App from "./App.tsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: import.meta.env.VITE_GHPAGES_BASE_URL,
    element: <App />,
    children: [
      {
        path: import.meta.env.VITE_GHPAGES_BASE_URL,
        element: <Home />,
      },
      {
        path: `${import.meta.env.VITE_GHPAGES_BASE_URL}contact`,
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
