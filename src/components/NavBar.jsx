import { Container, Flex, Heading } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container className="bg-">
      <Flex>
        <Heading as="h5">
          <Link to="/">Need For React</Link>
        </Heading>
      </Flex>
    </Container>
  );
};

export default NavBar;
