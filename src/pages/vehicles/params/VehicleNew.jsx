import { Button, Stack, Title } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import "react";
import { Link } from "react-router-dom";

const VehicleNew = () => {
  return (
    <Stack align="start">
      <Title size="h2">Add new vehicle</Title>
      <Link to="/vehicles">
        <Button variant="subtle" leftSection={<IconArrowLeft />}>
          Go back
        </Button>
      </Link>
    </Stack>
  );
};

export default VehicleNew;
