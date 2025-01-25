import {
  Button,
  Center,
  ColorInput,
  Group,
  Input,
  InputLabel,
  NativeSelect,
  RangeSlider,
  SegmentedControl,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconArrowLeft, IconCar, IconMotorbike } from "@tabler/icons-react";

import "react";
import { Link } from "react-router-dom";
import { Bike, Car, Vehicle } from "../../../models";
import { colorSwatch, firstLetterUppercase } from "../../../utils";
import Labeler from "../../../components/Labeler";

const VehicleNew = () => {
  return (
    <Stack align="start">
      <Title size="h2">Add new vehicle</Title>
      <Link to="/vehicles">
        <Button variant="subtle" leftSection={<IconArrowLeft />}>
          Go back
        </Button>
      </Link>
      <Group>
        <VehicleForm />
      </Group>
    </Stack>
  );
};

export default VehicleNew;

const VehicleForm = () => {
  return (
    <form>
      <Stack>
        <Labeler label="Select a type">
          <SegmentedControl
            data={[
              {
                value: Car.name,
                label: (
                  <Center style={{ gap: 10 }}>
                    <IconCar size={16} />
                    {Car.name}
                  </Center>
                ),
              },
              {
                value: Bike.name,
                label: (
                  <Center style={{ gap: 10 }}>
                    <IconMotorbike size={16} />
                    {Bike.name}
                  </Center>
                ),
              },
            ]}
            defaultChecked
          />
        </Labeler>
        <TextInput label="Model" placeholder="Enter your {VEHICLE} model" />
        <ColorInput
          format="hex"
          swatches={colorSwatch}
          label="Color"
          defaultValue="#ffffff"
        />
        <Labeler label="Traction">
          <SegmentedControl
            data={[
              {
                value: Vehicle.TRACTION.soft,
                label: firstLetterUppercase(Vehicle.TRACTION.soft),
              },
              {
                value: Vehicle.TRACTION.medium,
                label: firstLetterUppercase(Vehicle.TRACTION.medium),
              },
              {
                value: Vehicle.TRACTION.hard,
                label: firstLetterUppercase(Vehicle.TRACTION.hard),
              },
            ]}
            defaultChecked
          />
        </Labeler>
        <Labeler label="Speed" gap="3px">
          <RangeSlider
            minRange={1}
            min={1}
            max={15}
            step={1}
            label={(value) => `${value} moves`}
          />
        </Labeler>
        <Button
          mt={10}
          variant="gradient"
          gradient={{ from: "indigo", to: "blue", deg: 360 }}
        >
          Add vehicle
        </Button>
      </Stack>
    </form>
  );
};
