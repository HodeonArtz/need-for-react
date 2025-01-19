import { Container, Flex, Heading } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container>
      <Flex>
        <Heading as="h5" className="logo uppercase bg-white">
          <Link to="/">Need For React</Link>
        </Heading>
      </Flex>
    </Container>
  );
};

export default NavBar;
