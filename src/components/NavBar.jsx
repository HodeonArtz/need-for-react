import { Box, Container, Divider, Flex, Title } from "@mantine/core";
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
    <Box bg="dark">
      <Container>
        <Flex gap="lg" className="py-3">
          <Logo />
          <Divider orientation="vertical" size="sm" />
          <Flex
            align="center"
            gap="md"
            fw={500}
            className=" text-hover-underline"
          >
            <NavLink to="/" className="font-bold text-2xl">
              🏁 Play
            </NavLink>
            <NavLink to="/vehicles">🚗 Garage</NavLink>
            <NavLink to="/drivers">🧑 Drivers</NavLink>
            <NavLink to="/racetracks">🚥 Racetracks</NavLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
