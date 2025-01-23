import {
  BackgroundImage,
  Badge,
  Card,
  Flex,
  Group,
  Table,
  Title,
} from "@mantine/core";
import { closest } from "color-2-name";
import backgroundVehicle from "../../assets/png/background-landscape.png";
import { Bike, Car } from "../../models";
import BikeRender from "./BikeRender";
import CarRender from "./CarRender";
import { firstLetterUppercase } from "../../utils";

/**
 * @param {{vehicle: import("../../models/Vehicles/Vehicle").default}} props
 */
const VehicleCard = ({ vehicle }) => {
  return (
    <Card>
      <Card.Section>
        <BackgroundImage
          src={backgroundVehicle}
          style={{ backgroundPositionY: "96%" }}
          bgsz={500}
          p="lg"
        >
          <Flex w="100%" justify={"center"} align={"end"}>
            {vehicle.constructor.name === Car.name && (
              <CarRender color={vehicle.color} width={"100%"} />
            )}
            {vehicle.constructor.name === Bike.name && (
              <BikeRender color={vehicle.color} height={"100px"} />
            )}
          </Flex>
        </BackgroundImage>
      </Card.Section>
      <Group justify="space-between" mt="md" mb="xs">
        <Title ff={"text"} size="h2">
          {vehicle.model}
        </Title>

        <Table withColumnBorders variant="vertical" layout="fixed">
          <Table.Tbody>
            <Table.Tr>
              <Table.Th w={100}>Color</Table.Th>
              <Table.Td>
                <Badge color={vehicle.color}>
                  {closest(vehicle.color).name}
                </Badge>
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Th>Traction</Table.Th>
              <Table.Td>{firstLetterUppercase(vehicle.traction)}</Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Th>Min. Speed</Table.Th>
              <Table.Td>{vehicle.maxMoves} moves</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>Max Speed</Table.Th>
              <Table.Td>{vehicle.minMoves} moves</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Group>
    </Card>
  );
};

export default VehicleCard;
