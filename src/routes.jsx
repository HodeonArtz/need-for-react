import Game from "./pages/Game.jsx";
import Layout from "./Layout.jsx";
import Vehicles from "./pages/vehicles/Vehicles.jsx";
import Drivers from "./pages/drivers/Drivers.jsx";
import Racetracks from "./pages/racetracks/Racetracks.jsx";

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
      { path: "circuits", element: <Racetracks /> },
    ],
  },
];
export default routes;
