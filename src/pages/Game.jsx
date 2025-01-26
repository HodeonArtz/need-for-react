import {
  ActionIcon,
  Button,
  darken,
  Group,
  Select,
  Slider,
  Stack,
  Title,
} from "@mantine/core";
import { useEntitiesState } from "../hooks/useEntitiesState";
import { RacetrackCardLine } from "./racetracks/RacetracksList";
import { useForm } from "@mantine/form";
import { weatherMap } from "../components/Racetracks/weatherMap";
import { Bike, Car, Driver } from "../models";
import CarRender from "../components/Vehicles/CarRender";
import BikeRender from "../components/Vehicles/BikeRender";
import { useGamesState } from "../hooks/useGameState";

const Game = () => {
  /**
   * @type {import("../models").Racetrack[]}
   */
  const racetracks = useEntitiesState((s) => s.racetracks);
  const racetracksToSelect = racetracks.map((racetrack) => ({
    value: racetrack.id,
    label: racetrack.name,
  }));
  const drivers = useEntitiesState((s) => s.drivers);
  const driversToSelect = drivers.map((driver) => ({
    value: driver.id,
    label: driver.name,
  }));

  const form = useForm({
    mode: "controlled",
    initialValues: {
      racetrack: racetracks[0].id,
      driver: drivers[0].id,
    },
  });

  const addDriver = useGamesState((s) => s.addDriver);
  const driversCompeting = useGamesState((s) => s.driversCompeting);

  return (
    <>
      <Stack>
        <Title size={"h2"}>Game</Title>
        <Group>
          <Stack component="form" w="100%" gap={"lg"}>
            <Stack>
              <Title ff={"text"} size={"h3"}>
                Select a circuit
              </Title>
              <Select
                data={racetracksToSelect}
                defaultValue={racetracks[0].id}
                w={300}
                allowDeselect={false}
                renderOption={({ option }) => {
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
            <Stack>
              <Title ff={"text"} size={"h3"}>
                Select a driver
              </Title>
              <Group>
                <Select
                  data={driversToSelect}
                  defaultValue={drivers[0].id}
                  w={300}
                  allowDeselect={false}
                  {...form.getInputProps("driver")}
                />
                <Button
                  onClick={() => {
                    addDriver(
                      drivers.find(
                        (driver) => driver.id === form.getValues().driver
                      )
                    );
                  }}
                >
                  Add Driver
                </Button>
              </Group>
            </Stack>
            <Stack gap={"lg"}>
              {driversCompeting.map((driver) => {
                console.log(driver);
                return (
                  <DriverTrackLine
                    key={driver.driver.id}
                    position={driver.position}
                    trackLength={racetracks.find(
                      (racetrack) => racetrack.id === form.getValues().racetrack
                    )}
                    driver={driver.driver}
                  />
                );
              })}
            </Stack>
          </Stack>
        </Group>
      </Stack>
    </>
  );
};

export default Game;

/**
 *
 * @param {{position:number, trackLength: number, driver: Driver}} param0
 * @returns
 */
const DriverTrackLine = ({ position, trackLength, driver }) => {
  /**
   * @type {Bike | Car}
   */
  const vehicle = useEntitiesState((s) => s.vehicles).find(
    (vehicle) => vehicle.id === driver.vehicleId
  );
  return (
    <Stack gap={"xs"}>
      <Title ff={"text"} size="h4">
        {driver.name}
      </Title>
      <Slider
        min={0}
        max={trackLength * 12}
        value={position}
        w="100%"
        size={"xl"}
        color={darken(vehicle.color, 0.3)}
        styles={{ thumb: { borderWidth: 0, padding: 0, background: "none" } }}
        thumbChildren={
          vehicle.constructor.name === Car.name ? (
            <CarRender color={vehicle.color} />
          ) : (
            <BikeRender color={vehicle.color} />
          )
        }
        thumbSize={vehicle.constructor.name === Car.name ? 90 : 60}
      />
    </Stack>
  );
};
