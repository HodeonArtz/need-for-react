import Game from "./pages/Game.jsx";
import Layout from "./Layout.jsx";
import VehiclesList from "./pages/vehicles/VehiclesList.jsx";
import DriversList from "./pages/drivers/DriversList.jsx";
import RacetracksList from "./pages/racetracks/RacetracksList.jsx";

/**
 * @type {import("react-router-dom").RouteObject[]}
 */
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Game /> },
      { path: "vehicles", element: <VehiclesList /> },
      { path: "drivers", element: <DriversList /> },
      { path: "circuits", element: <RacetracksList /> },
    ],
  },
];
export default routes;
