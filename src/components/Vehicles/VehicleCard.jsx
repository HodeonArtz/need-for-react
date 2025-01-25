import {
  ActionIcon,
  Badge,
  Card,
  Group,
  Table,
  Title,
  Tooltip,
  Transition,
} from "@mantine/core";
import { closest } from "color-2-name";
import { firstLetterUppercase } from "../../utils";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useHover } from "@mantine/hooks";
import { useEntitiesState } from "../../hooks/useEntitiesState";
import { VehiclePreview } from "./VehiclePreview";
import { useNavigate } from "react-router-dom";

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

const VehicleActionButtons = ({ mounted, vehicleId }) => {
  const deleteVehicle = useEntitiesState((s) => s.deleteVehicle);
  const navigate = useNavigate();
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
          <Tooltip label="Edit vehicle" color="dark" position="left">
            <ActionIcon
              variant="default"
              size="md"
              aria-label="Edit"
              onClick={() => navigate(`/vehicles/${vehicleId}/edit`)}
            >
              <IconPencil size={20} stroke={1.5} />
            </ActionIcon>
          </Tooltip>

          <Tooltip label="Delete vehicle" color="red" position="left">
            <ActionIcon
              color="red"
              variant="filled"
              size="md"
              aria-label="Delete"
              onClick={() => deleteVehicle(vehicleId)}
            >
              <IconTrash size={20} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
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
            <Badge autoContrast color={vehicle.color}>
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
  );
};
