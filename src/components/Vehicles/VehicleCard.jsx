import {
  ActionIcon,
  BackgroundImage,
  Badge,
  Card,
  Flex,
  Group,
  Table,
  Title,
  Transition,
} from "@mantine/core";
import { closest } from "color-2-name";
import backgroundVehicle from "../../assets/png/background-landscape.png";
import { Bike, Car } from "../../models";
import BikeRender from "./BikeRender";
import CarRender from "./CarRender";
import { firstLetterUppercase } from "../../utils";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useHover } from "@mantine/hooks";
import { useEntitiesState } from "../../hooks/useEntitiesState";

/**
 * @param {{vehicle: import("../../models/Vehicles/Vehicle").default}} props
 */
const VehicleCard = ({ vehicle }) => {
  const { hovered, ref } = useHover();
  return (
    <Card ref={ref}>
      <Card.Section>
        <VehiclePreview vehicle={vehicle} />
        <VehicleActionButtons mounted={hovered} vehicleId={vehicle.id} />
      </Card.Section>
      <Group justify="space-between" mt="md" mb="xs">
        <Title ff={"text"} size="h3">
          {vehicle.model}
        </Title>
        <VehicleDataTable vehicle={vehicle} />
      </Group>
    </Card>
  );
};

export default VehicleCard;

const VehiclePreview = ({ vehicle }) => {
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

const VehicleActionButtons = ({ mounted, vehicleId }) => {
  const deleteVehicle = useEntitiesState((s) => s.deleteVehicle);
  return (
    <Transition
      mounted={mounted}
      duration={75}
      transition="fade"
      timingFunction="ease-in-out"
    >
      {(styles) => (
        <ActionIcon.Group
          pos={"absolute"}
          orientation="vertical"
          right={10}
          top={10}
          style={styles}
        >
          <ActionIcon variant="default" size="md" aria-label="Gallery">
            <IconPencil size={20} stroke={1.5} />
          </ActionIcon>

          <ActionIcon
            variant="default"
            size="md"
            aria-label="Settings"
            onClick={() => deleteVehicle(vehicleId)}
          >
            <IconTrash size={20} stroke={1.5} />
          </ActionIcon>
        </ActionIcon.Group>
      )}
    </Transition>
  );
};

const VehicleDataTable = ({ vehicle }) => {
  return (
    <Table withColumnBorders variant="vertical" layout="fixed">
      <Table.Tbody>
        <Table.Tr>
          <Table.Th w={100}>Color</Table.Th>
          <Table.Td>
            <Badge color={vehicle.color}>{closest(vehicle.color).name}</Badge>
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
  );
};

const ColorBadge = ({ color }) => {
  return <Badge color={color}>{closest(color).name}</Badge>;
};
