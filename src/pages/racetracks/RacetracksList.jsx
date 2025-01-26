import { ActionIcon, Group, Stack, Title, Tooltip } from "@mantine/core";
import { defaultRacetracks } from "../../db/racetracks";
import { Racetrack } from "../../models";
import { IconCloudRain, IconDroplet, IconSun } from "@tabler/icons-react";
import { firstLetterUppercase } from "../../utils";

const RacetracksList = () => {
  return (
    <Stack>
      <Title size="h2">Racetracks</Title>
      <Stack>
        {defaultRacetracks.map((racetrack) => (
          <RacetrackCardLine racetrack={racetrack} key={racetrack.id} />
        ))}
      </Stack>
    </Stack>
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
  const weatherMapInstance = weatherMap.find(
    (weatherCon) => weatherCon.weather === racetrack.weather
  );
  return (
    <Group style={{ borderRadius: "8px" }} bg={"dark"} p={"md"}>
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
      <Title ff={"text"} size="h4">
        {racetrack.name}
      </Title>
    </Group>
  );
};
