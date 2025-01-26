import { Button, Stack, Title } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RacetrackFormScreen from "../../../components/Racetracks/RacetrackFormScreen";
import { useEntitiesState } from "../../../hooks/useEntitiesState";

const RacetrackEdit = () => {
  const navigate = useNavigate();

  const { id: racetrackId } = useParams();
  const racetracks = useEntitiesState((s) => s.racetracks);
  const foundRacetrack = racetracks.find(
    (racetracks) => racetracks.id === racetrackId
  );
  if (!foundRacetrack) {
    navigate("/racetracks");
    return null;
  }
  return (
    <Stack align="start">
      <Title size="h2">Edit racetrack</Title>
      <Link to="/racetracks">
        <Button variant="subtle" leftSection={<IconArrowLeft />}>
          Go back
        </Button>
      </Link>

      <RacetrackFormScreen racetrackToEdit={foundRacetrack} />
    </Stack>
  );
};

export default RacetrackEdit;
