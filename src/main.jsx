import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/charts/styles.css";
import "@mantine/core/styles.css";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";
import Providers from "./Providers.jsx";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>
);
