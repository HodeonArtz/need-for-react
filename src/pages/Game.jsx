import { ActionIcon, Group, Select, Stack, Title } from "@mantine/core";
import { useEntitiesState } from "../hooks/useEntitiesState";
import { RacetrackCardLine } from "./racetracks/RacetracksList";
import { useForm } from "@mantine/form";
import { weatherMap } from "../components/Racetracks/weatherMap";

const Game = () => {
  /**
   * @type {import("../models").Racetrack[]}
   */
  const racetracks = useEntitiesState((s) => s.racetracks);
  const racetracksToSelect = racetracks.map((racetrack) => ({
    value: racetrack.id,
    label: racetrack.name,
  }));

  const form = useForm({
    mode: "controlled",
    initialValues: {
      racetrack: racetracks[0].id,
    },
  });

  return (
    <>
      <Stack>
        <Title size={"h2"}>Game</Title>
        <Group>
          <Stack component="form" w="100%">
            <Title ff={"text"} size={"h3"}>
              Select a circuit
            </Title>
            <Select
              data={racetracksToSelect}
              defaultValue={racetracks[0].id}
              w={300}
              allowDeselect={false}
              renderOption={({ option, checked }) => {
                const weatherMapInstance = weatherMap.find(
                  (weather) =>
                    weather.weather ===
                    racetracks.find((r) => r.id === option.value).weather
                );

                return (
                  <>
                    <ActionIcon size={"lg"} color={weatherMapInstance.color}>
                      {<weatherMapInstance.icon />}
                    </ActionIcon>
                    {option.label}
                  </>
                );
              }}
              {...form.getInputProps("racetrack")}
            />
            <RacetrackCardLine
              racetrack={racetracks.find(
                (racetrack) => racetrack.id === form.values.racetrack
              )}
              hideActionButtons
            />
          </Stack>
        </Group>
      </Stack>
    </>
  );
};

export default Game;
