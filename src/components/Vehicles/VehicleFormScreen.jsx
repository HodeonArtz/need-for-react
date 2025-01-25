import {
  BackgroundImage,
  Button,
  Center,
  ColorInput,
  Flex,
  RangeSlider,
  SegmentedControl,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { IconArrowLeft, IconCar, IconMotorbike } from "@tabler/icons-react";

import "react";
import { Link, useNavigate } from "react-router-dom";
import { Bike, Car, Vehicle } from "../../models";
import { colorSwatch, firstLetterUppercase, getRandomColor } from "../../utils";
import Labeler from "../../components/Labeler";
import backgroundVehicle from "../../assets/png/background-landscape.png";
import CarRender from "../../components/Vehicles/CarRender";
import BikeRender from "../../components/Vehicles/BikeRender";
import { useForm, zodResolver } from "@mantine/form";
import { vehicleFormSchema } from "../../schemas/vehicleFormValidation";
import { useEntitiesState } from "../../hooks/useEntitiesState";

/**
 *
 * @param {{vehicleToEdit: import("../../models/index.js").Vehicle}} props
 * @returns
 */
const VehicleFormScreen = ({ vehicleToEdit }) => {
  const initialValues = !vehicleToEdit
    ? {
        type: Car.name,
        model: "",
        color: getRandomColor(),
        traction: Vehicle.TRACTION.soft,
        speeds: [4, 12],
      }
    : {
        type: vehicleToEdit.constructor.name,
        model: vehicleToEdit.model,
        color: vehicleToEdit.color,
        traction: vehicleToEdit.traction,
        speeds: [vehicleToEdit.minMoves, vehicleToEdit.maxMoves],
      };

  const form = useForm({
    mode: "controlled",
    initialValues,
    validate: zodResolver(vehicleFormSchema(vehicleToEdit)),
  });

  const vehicleProperties = {
    color: form.values.color,
    minMoves: form.values.speeds[0],
    maxMoves: form.values.speeds[1],
    model: form.values.model,
    traction: form.values.traction,
  };

  const vehicle =
    form.values.type === Car.name
      ? new Car(vehicleProperties)
      : new Bike(vehicleProperties);

  if (vehicleToEdit) vehicle.setId(vehicleToEdit.id);

  const navigate = useNavigate();
  const addVehicle = useEntitiesState((s) => s.addVehicle);
  const editVehicle = useEntitiesState((s) => s.updateVehicle);
  const handleOnSubmit = () => {
    if (vehicleToEdit) editVehicle(vehicle);
    else addVehicle(vehicle);
    navigate("/vehicles");
  };

  return (
    <Stack align="start">
      <Title size="h2">Add new vehicle</Title>
      <Link to="/vehicles">
        <Button variant="subtle" leftSection={<IconArrowLeft />}>
          Go back
        </Button>
      </Link>
      <Flex w="100%" gap={"xl"}>
        <VehicleForm form={form} onSubmit={handleOnSubmit} />
        <VehiclePreview vehicle={vehicle} />
      </Flex>
    </Stack>
  );
};

export default VehicleFormScreen;

/**
 *
 * @param {{form : import("@mantine/form").UseFormReturnType, onSubmit: Function }} props
 * @returns
 */
const VehicleForm = ({ form, onSubmit }) => {
  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
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
            {...form.getInputProps("type")}
          />
        </Labeler>
        <TextInput
          label="Model"
          placeholder={`Enter your ${form.values.type.toLowerCase()} model`}
          {...form.getInputProps("model")}
        />
        <ColorInput
          format="hex"
          swatches={colorSwatch}
          label="Color"
          {...form.getInputProps("color")}
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
            {...form.getInputProps("traction")}
          />
        </Labeler>
        <Labeler label="Speeds" gap="3px">
          <RangeSlider
            minRange={1}
            min={1}
            max={15}
            step={1}
            label={(value) => `${value} moves`}
            {...form.getInputProps("speeds")}
          />
        </Labeler>
        <Button
          mt={10}
          variant="gradient"
          gradient={{ from: "indigo", to: "blue", deg: 360 }}
          type="sumbit"
        >
          Add vehicle
        </Button>
      </Stack>
    </form>
  );
};
const VehiclePreview = ({ vehicle }) => {
  return (
    <BackgroundImage
      src={backgroundVehicle}
      style={{
        backgroundPositionY: "96%",
      }}
      bgsz="300%"
      maw="70%"
      p={"xl"}
      pb={"8%"}
      radius={"lg"}
    >
      <Flex justify={"center"} align={"end"} h={"100%"}>
        {vehicle.constructor.name === Car.name && (
          <CarRender color={vehicle.color} width={"100%"} />
        )}
        {vehicle.constructor.name === Bike.name && (
          <BikeRender color={vehicle.color} height={200} />
        )}
      </Flex>
    </BackgroundImage>
  );
};
