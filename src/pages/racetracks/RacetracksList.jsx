import {
  ActionIcon,
  Button,
  Group,
  Modal,
  Slider,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";

import { Racetrack } from "../../models";
import {
  IconCloudRain,
  IconDroplet,
  IconPencil,
  IconPlus,
  IconSun,
  IconTrash,
} from "@tabler/icons-react";
import { firstLetterUppercase } from "../../utils";
import { useEntitiesState } from "../../hooks/useEntitiesState";
import { useDisclosure } from "@mantine/hooks";
import { Link, useNavigate } from "react-router-dom";

const RacetracksList = () => {
  const clearRacetracks = useEntitiesState((state) => state.clearRacetracks);
  const racetracks = useEntitiesState((s) => s.racetracks);

  const clearRacetracksModalState = useDisclosure(false);
  const clearRacetracksModal = {
    opened: clearRacetracksModalState[0],
    open: clearRacetracksModalState[1].open,
    close: clearRacetracksModalState[1].close,
  };

  return (
    <>
      <Modal
        opened={clearRacetracksModal.opened}
        onClose={clearRacetracksModal.close}
        title="Clear all racetracks"
      >
        <Stack>
          <Text>Are you sure you want to clear all racetracks?</Text>
          <Group>
            <Button variant="default" onClick={clearRacetracksModal.close}>
              Cancel
            </Button>
            <Button
              variant="filled"
              color="red"
              onClick={() => {
                clearRacetracksModal.close();
                clearRacetracks();
              }}
              leftSection={<IconTrash stroke={2} />}
            >
              Clear
            </Button>
          </Group>
        </Stack>
      </Modal>
      <Stack>
        <Title size="h2">Racetracks</Title>
        <Group>
          <Link to="/racetracks/new">
            <Button leftSection={<IconPlus stroke={2} />} variant="filled">
              Add racetrack
            </Button>
          </Link>
          {racetracks.length && (
            <Tooltip
              label="Clear all racetracks"
              position="right"
              color="red"
              withArrow
            >
              <ActionIcon
                size={"input-sm"}
                color="red"
                variant="outline"
                onClick={clearRacetracksModal.open}
              >
                <IconTrash stroke={2} />
              </ActionIcon>
            </Tooltip>
          )}
        </Group>
        <Stack>
          {racetracks.map((racetrack) => (
            <RacetrackCardLine racetrack={racetrack} key={racetrack.id} />
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default RacetracksList;

const weatherMap = [
  { weather: Racetrack.WEATHER.dry, icon: <IconSun />, color: "yellow" },
  { weather: Racetrack.WEATHER.wet, icon: <IconDroplet />, color: "cyan" },
  {
    weather: Racetrack.WEATHER.rainy,
    icon: <IconCloudRain />,
    color: "indigo",
  },
];

/**
 *
 * @param {{racetrack: import("../../models/index").Racetrack}} props
 */
const RacetrackCardLine = ({ racetrack }) => {
  const deleteRacetrack = useEntitiesState((state) => state.deleteRacetrack);
  const navigate = useNavigate();

  const weatherMapInstance = weatherMap.find(
    (weatherCon) => weatherCon.weather === racetrack.weather
  );
  return (
    <Group style={{ borderRadius: "8px" }} bg={"dark"} p={"md"} align="start">
      <Tooltip
        label={firstLetterUppercase(racetrack.weather)}
        position="left"
        withArrow
        color={weatherMapInstance.color}
      >
        <ActionIcon size={"lg"} color={weatherMapInstance.color}>
          {weatherMapInstance.icon}
        </ActionIcon>
      </Tooltip>
      <Stack style={{ flexGrow: 1 }} gap={"xs"}>
        <Title ff={"text"} size="h4">
          {racetrack.name}
        </Title>
        <Slider
          min={0}
          max={15}
          value={racetrack.trackLengthKm}
          size={"sm"}
          color={weatherMapInstance.color}
          marks={[
            { value: 0.2, label: "0 km" },
            { value: 3, label: "3 km" },
            { value: 6, label: "6 km" },
            { value: 9, label: "9 km" },
            { value: 12, label: "12 km" },
            { value: 14.75, label: "15 km" },
          ]}
          mb={"md"}
          label={(value) => `${value} km`}
        />
      </Stack>
      <ActionIcon.Group orientation="vertical">
        <Tooltip position="right-end" color="gray" label="Edit Racetrack">
          <ActionIcon
            onClick={() => navigate(`/racetracks/${racetrack.id}/edit`)}
            size={"md"}
            color="gray"
          >
            <IconPencil size={20} stroke={1.5} />
          </ActionIcon>
        </Tooltip>
        <Tooltip position="right-start" color="red" label="Delete Racetrack">
          <ActionIcon
            size={"md"}
            color="red"
            variant="outline"
            onClick={() => deleteRacetrack(racetrack.id)}
          >
            <IconTrash size={20} stroke={1.5} />
          </ActionIcon>
        </Tooltip>
      </ActionIcon.Group>
    </Group>
  );
};
