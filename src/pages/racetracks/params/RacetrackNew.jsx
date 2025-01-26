import { IconArrowLeft } from "@tabler/icons-react";
import RacetrackFormScreen from "../../../components/Racetracks/RacetrackFormScreen";
import { Button, Stack, Title } from "@mantine/core";
import { Link } from "react-router-dom";

const RacetrackNew = () => {
  return (
    <Stack align="start">
      <Title size="h2">Add racetrack</Title>
      <Link to="/racetracks">
        <Button variant="subtle" leftSection={<IconArrowLeft />}>
          Go back
        </Button>
      </Link>

      <RacetrackFormScreen />
    </Stack>
  );
};

export default RacetrackNew;
