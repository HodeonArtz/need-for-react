import Game from "./Game.jsx";
import Layout from "./Layout.jsx";

/**
 * @type {import("react-router-dom").RouteObject[]}
 */
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Game /> }],
  },
];
export default routes;
