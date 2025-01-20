import Game from "./pages/Game.jsx";
import Layout from "./Layout.jsx";
import Vehicles from "./pages/vehicles/Vehicles.jsx";
import Drivers from "./pages/drivers/Drivers.jsx";
import Circuits from "./pages/circuits/Circuits.jsx";

/**
 * @type {import("react-router-dom").RouteObject[]}
 */
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Game /> },
      { path: "vehicles", element: <Vehicles /> },
      { path: "drivers", element: <Drivers /> },
      { path: "circuits", element: <Circuits /> },
    ],
  },
];
export default routes;
