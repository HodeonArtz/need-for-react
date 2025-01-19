import { Container, Group, Title } from "@mantine/core";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container>
      <Group>
        <Title className="uppercase">
          <Link>NFR</Link>
        </Title>
      </Group>
    </Container>
  );
};

export default NavBar;
