import Game from "./pages/Game.jsx";
import Layout from "./Layout.jsx";
import VehiclesList from "./pages/vehicles/VehiclesList.jsx";
import DriversList from "./pages/drivers/DriversList.jsx";
import RacetracksList from "./pages/racetracks/RacetracksList.jsx";
import VehicleNew from "./pages/vehicles/params/VehicleNew.jsx";
import DriverNew from "./pages/drivers/params/DriverNew.jsx";
import RacetrackNew from "./pages/racetracks/params/RacetrackNew.jsx";
import VehicleEdit from "./pages/vehicles/params/VehicleEdit.jsx";

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
      { path: "vehicles/new", element: <VehicleNew /> },
      { path: "vehicles/:id/edit", element: <VehicleEdit /> },
      { path: "drivers", element: <DriversList /> },
      { path: "drivers/new", element: <DriverNew /> },
      { path: "racetracks", element: <RacetracksList /> },
      { path: "racetracks/new", element: <RacetrackNew /> },
    ],
  },
];
export default routes;
