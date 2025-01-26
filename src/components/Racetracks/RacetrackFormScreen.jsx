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
import { firstLetterUppercase } from "../../utils";

const RacetrackFormScreen = () => {
  return (
    <Flex w="100%" gap={"xl"}>
      <RacetrackForm />
      <WeatherPreview weatherImg={weatherMap[0].preview} />
    </Flex>
  );
};

export default RacetrackFormScreen;

export const RacetrackForm = () => {
  return (
    <Stack component={"form"}>
      <TextInput label="Name" placeholder="Enter the racetrack name" />
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
        />
      </Labeler>
      <NumberInput label="Length (km)" min={1} max={15} defaultValue={1} />
      <Slider
        min={1}
        max={15}
        size={"sm"}
        mb={"lg"}
        marks={[
          { value: 0.2, label: "1" },
          { value: 3, label: "3" },
          { value: 6, label: "6" },
          { value: 9, label: "9" },
          { value: 12, label: "12" },
          { value: 14.75, label: "15" },
        ]}
      />
      <Button
        mt={10}
        variant="gradient"
        gradient={{ from: "indigo", to: "blue", deg: 360 }}
        type="sumbit"
      >
        Add racetrack
      </Button>
    </Stack>
  );
};

const WeatherPreview = ({ weatherImg }) => {
  return <BackgroundImage radius={"md"} src={weatherImg} w="70%" />;
};
