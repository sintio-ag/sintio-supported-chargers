import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";

import App from "./App.tsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/sintio-supported-chargers/",
    element: <App />,
    children: [
      {
        path: "/sintio-supported-chargers/",
        element: <Home />,
      },
      {
        path: "/sintio-supported-chargers/contact/",
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
