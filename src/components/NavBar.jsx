import { Container, Divider, Flex, Title } from "@mantine/core";
import { Link, NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <Title className="uppercase select-none">
      <Link>NFR</Link>
    </Title>
  );
};

const NavBar = () => {
  return (
    <Container className="box-border">
      <Flex gap="lg" className="py-3 box-border">
        <Logo className="box-border" />
        <Divider orientation="vertical" size="sm" />
        <Flex
          align="center"
          gap="md"
          fw={500}
          className=" text-hover-underline"
        >
          <NavLink className="font-bold text-2xl">🏁 Play</NavLink>
          <NavLink>🚗 Vehicles</NavLink>
          <NavLink>🧑 Drivers</NavLink>
          <NavLink>🚥 Circuits</NavLink>
        </Flex>
      </Flex>
    </Container>
  );
};

export default NavBar;
