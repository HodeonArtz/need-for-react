import Masonry from "react-layout-masonry";
import VehicleCard from "../../components/Vehicles/VehicleCard";
import { useEntitiesState } from "../../hooks/useEntitiesState";
import {
  ActionIcon,
  Button,
  Group,
  Modal,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

const VehiclesList = () => {
  const clearVehicles = useEntitiesState((state) => state.clearVehicles);
  const vehicles = useEntitiesState((s) => s.vehicles);

  const clearVehiclesModalState = useDisclosure(false);
  const clearVehiclesModal = {
    opened: clearVehiclesModalState[0],
    open: clearVehiclesModalState[1].open,
    close: clearVehiclesModalState[1].close,
  };

  return (
    <>
      <Modal
        opened={clearVehiclesModal.opened}
        onClose={clearVehiclesModal.close}
        title="Clear all vehicles"
      >
        <Stack>
          <Text>
            Are you sure you want to clear all vehicles from the car lot?
          </Text>
          <Group>
            <Button variant="default" onClick={clearVehiclesModal.close}>
              Cancel
            </Button>
            <Button
              variant="filled"
              color="red"
              onClick={() => {
                clearVehiclesModal.close();
                clearVehicles();
              }}
              leftSection={<IconTrash stroke={2} />}
            >
              Clear
            </Button>
          </Group>
        </Stack>
      </Modal>
      <Stack>
        <Title size="h2">Car Lot</Title>
        <Group>
          <Link to="/vehicles/new">
            <Button leftSection={<IconPlus stroke={2} />} variant="filled">
              Add vehicle
            </Button>
          </Link>
          {vehicles.length && (
            <Tooltip
              label="Clear all vehicles"
              position="right"
              color="red"
              withArrow
            >
              <ActionIcon
                size={"input-sm"}
                color="red"
                variant="outline"
                onClick={clearVehiclesModal.open}
              >
                <IconTrash stroke={2} />
              </ActionIcon>
            </Tooltip>
          )}
        </Group>
        {vehicles.length ? (
          <Masonry columns={3} gap={24}>
            {vehicles.map((vehicle) => (
              <VehicleCard vehicle={vehicle} key={vehicle.id} />
            ))}
          </Masonry>
        ) : (
          <Text>No cars in the car lot yet...</Text>
        )}
      </Stack>
    </>
  );
};

export default VehiclesList;
