import {
  BackgroundImage,
  Button,
  Center,
  Flex,
  NumberInput,
  SegmentedControl,
  Slider,
  Stack,
  TextInput,
  Tooltip,
} from "@mantine/core";
import "react";
import Labeler from "../Labeler";

import { weatherMap } from "./weatherMap";
import { firstLetterUppercase, getRandomNumber } from "../../utils";
import { Racetrack } from "../../models";
import { useForm, zodResolver } from "@mantine/form";
import { racetrackFormSchema } from "../../schemas/racetrackFormValidation";
import { useNavigate } from "react-router-dom";
import { useEntitiesState } from "../../hooks/useEntitiesState";

/**
 * @param {{racetrackToEdit: import("../../models").Racetrack}} param0
 */
const RacetrackFormScreen = ({ racetrackToEdit }) => {
  const initialValues = !racetrackToEdit
    ? {
        name: "",
        weather: Racetrack.WEATHER.dry,
        trackLengthKm: +getRandomNumber(1, 15).toFixed(2),
      }
    : {
        name: racetrackToEdit.name,
        weather: racetrackToEdit.weather,
        trackLengthKm: racetrackToEdit.trackLengthKm,
      };

  const form = useForm({
    mode: "controlled",
    initialValues,
    validate: zodResolver(racetrackFormSchema(racetrackToEdit)),
  });

  const racetrackProperties = {
    name: form.values.name,
    weather: form.values.weather,
    trackLengthKm: form.values.trackLengthKm,
  };

  const racetrack = new Racetrack({ ...racetrackProperties });

  if (racetrackToEdit) racetrack.setId(racetrackToEdit.id);

  const navigate = useNavigate();
  const addRacetrack = useEntitiesState((s) => s.addRacetrack);
  const editRacetrack = useEntitiesState((s) => s.updateRacetrack);
  const handleOnSubmit = () => {
    if (racetrackToEdit) editRacetrack(racetrack);
    else addRacetrack(racetrack);
    navigate("/racetracks");
  };

  return (
    <Flex w="100%" gap={"xl"}>
      <RacetrackForm
        form={form}
        onSubmit={handleOnSubmit}
        buttonLabel={`${racetrackToEdit ? "Edit" : "Add"} racetrack`}
      />
      <WeatherPreview
        weatherImg={
          weatherMap.find(
            (weatherInstance) => weatherInstance.weather === form.values.weather
          ).preview
        }
      />
    </Flex>
  );
};

export default RacetrackFormScreen;

/**
 *
 * @param {{form : import("@mantine/form").UseFormReturnType, onSubmit: Function }} props
 * @returns
 */

export const RacetrackForm = ({ form, onSubmit, buttonLabel }) => {
  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Stack>
        <TextInput
          label="Name"
          placeholder="Enter the racetrack name"
          {...form.getInputProps("name")}
        />
        <Labeler label="Select a weather">
          <SegmentedControl
            data={weatherMap.map((weatherInstance) => ({
              value: weatherInstance.weather,
              label: (
                <Tooltip
                  position="bottom"
                  color={weatherInstance.color}
                  offset={11}
                  label={firstLetterUppercase(weatherInstance.weather)}
                >
                  <Center style={{ gap: 10 }}>
                    <weatherInstance.icon size={16} />
                  </Center>
                </Tooltip>
              ),
            }))}
            defaultChecked
            color={
              weatherMap.find(
                (weatherInstance) =>
                  weatherInstance.weather === form.values.weather
              ).color
            }
            {...form.getInputProps("weather")}
          />
        </Labeler>
        <NumberInput
          label="Length (km)"
          min={1}
          max={15}
          defaultValue={1}
          {...form.getInputProps("trackLengthKm")}
        />
        <Slider
          min={1}
          max={15}
          size={"sm"}
          mb={"lg"}
          step={0.02}
          marks={[
            { value: 0.2, label: "1" },
            { value: 3, label: "3" },
            { value: 6, label: "6" },
            { value: 9, label: "9" },
            { value: 12, label: "12" },
            { value: 14.75, label: "15" },
          ]}
          {...form.getInputProps("trackLengthKm")}
        />
        <Button
          mt={10}
          variant="gradient"
          gradient={{ from: "indigo", to: "blue", deg: 360 }}
          type="sumbit"
        >
          {buttonLabel}
        </Button>
      </Stack>
    </form>
  );
};

const WeatherPreview = ({ weatherImg }) => {
  return <BackgroundImage radius={"md"} src={weatherImg} w="70%" />;
};
