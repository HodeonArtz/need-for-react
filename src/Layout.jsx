import { Container } from "@mantine/core";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="prose p-5">
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
