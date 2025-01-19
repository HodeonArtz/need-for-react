import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="prose p-5">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
