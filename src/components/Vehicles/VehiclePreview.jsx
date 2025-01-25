import { BackgroundImage, Flex } from "@mantine/core";
import backgroundVehicle from "../../assets/png/background-landscape.png";
import CarRender from "./CarRender";
import { Bike, Car } from "../../models";
import BikeRender from "./BikeRender";

export const VehiclePreview = ({ vehicle }) => {
  return (
    <BackgroundImage
      src={backgroundVehicle}
      style={{ backgroundPositionY: "96%" }}
      bgsz={500}
      pos={"relative"}
    >
      <Flex w="100%" justify={"center"} align={"end"} p={"lg"}>
        {vehicle.constructor.name === Car.name && (
          <CarRender color={vehicle.color} width={"100%"} />
        )}
        {vehicle.constructor.name === Bike.name && (
          <BikeRender color={vehicle.color} height={"100px"} />
        )}
      </Flex>
    </BackgroundImage>
  );
};
