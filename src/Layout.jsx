import { Affix, Button, Container, Transition } from "@mantine/core";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";

const Layout = () => {
  return (
    <>
      <AffixBtn />
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

export const AffixBtn = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="skew-down" mounted={scroll.y > 100}>
        {(transitionStyles) => (
          <Button
            leftSection={<IconArrowUp size={16} />}
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            Scroll to top
          </Button>
        )}
      </Transition>
    </Affix>
  );
};
