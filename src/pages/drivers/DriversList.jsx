import {
  ActionIcon,
  Button,
  Card,
  Group,
  Modal,
  Stack,
  Text,
  Title,
  Tooltip,
  Transition,
} from "@mantine/core";
import { IconPencil, IconPlus, IconTrash } from "@tabler/icons-react";
import { useEntitiesState } from "../../hooks/useEntitiesState";
import { useDisclosure, useHover } from "@mantine/hooks";
import { Link, useNavigate } from "react-router-dom";
import Masonry from "react-layout-masonry";
import { BarChart } from "@mantine/charts";

const DriversList = () => {
  const clearDrivers = useEntitiesState((state) => state.clearDrivers);
  const drivers = useEntitiesState((s) => s.drivers);

  const clearDriversModalState = useDisclosure(false);
  const clearDriversModal = {
    opened: clearDriversModalState[0],
    open: clearDriversModalState[1].open,
    close: clearDriversModalState[1].close,
  };
  return (
    <>
      <Modal
        opened={clearDriversModal.opened}
        onClose={clearDriversModal.close}
        title="Clear all drivers"
      >
        <Stack>
          <Text>Are you sure you want to clear all drivers?</Text>
          <Group>
            <Button variant="default" onClick={clearDriversModal.close}>
              Cancel
            </Button>
            <Button
              variant="filled"
              color="red"
              onClick={() => {
                clearDriversModal.close();
                clearDrivers();
              }}
              leftSection={<IconTrash stroke={2} />}
            >
              Clear
            </Button>
          </Group>
        </Stack>
      </Modal>
      <Stack>
        <Title size="h2">Drivers</Title>
        <Group>
          <Link to="/drivers/new">
            <Button leftSection={<IconPlus stroke={2} />} variant="filled">
              Add driver
            </Button>
          </Link>
          {drivers.length && (
            <Tooltip
              label="Clear all drivers"
              position="right"
              color="red"
              withArrow
            >
              <ActionIcon
                size={"input-sm"}
                color="red"
                variant="outline"
                onClick={clearDriversModal.open}
              >
                <IconTrash stroke={2} />
              </ActionIcon>
            </Tooltip>
          )}
        </Group>
        {drivers.length ? (
          <Masonry columns={3} gap={24}>
            {drivers.map((driver) => (
              <DriverCard driver={driver} key={driver.id} />
            ))}
          </Masonry>
        ) : (
          <Text>No drivers yet...</Text>
        )}
      </Stack>
    </>
  );
};

export default DriversList;

/**
 *
 * @param {{driver: import("../../models").Driver}} props
 * @returns
 */
const DriverCard = ({ driver }) => {
  const { hovered, ref } = useHover();

  const driverVehicle = useEntitiesState((s) => s.vehicles).find(
    (vehicle) => vehicle.id.toLowerCase() === driver.vehicleId?.toLowerCase()
  );
  return (
    <Card ref={ref}>
      <Card.Section>
        <DriverActionButtons mounted={hovered} driverId={driver.id} />
      </Card.Section>
      <Group justify="space-between" mt="md" mb="xs">
        <Title ff={"text"} size="h3">
          {driver.name}
        </Title>
        {driverVehicle && (
          <Text>
            {driverVehicle.constructor.name}: {driverVehicle.model}
          </Text>
        )}
      </Group>
      <Stack>
        <Text fw={"bolder"}>Stats</Text>
        <BarChart
          h={150}
          orientation="vertical"
          data={[
            { place: "First", times: driver.stats.firstPlaces },
            { place: "Second", times: driver.stats.secondPlaces },
            { place: "Third", times: driver.stats.thirdPlaces },
            { place: "Other", times: driver.stats.otherPlaces },
          ]}
          dataKey="place"
          series={[{ name: "times", color: "blue", label: "Times raced" }]}
        />
      </Stack>
    </Card>
  );
};

const DriverActionButtons = ({ mounted, driverId }) => {
  const deleteDriver = useEntitiesState((s) => s.deleteDriver);
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
              onClick={() => navigate(`/drivers/${driverId}/edit`)}
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
              onClick={() => deleteDriver(driverId)}
            >
              <IconTrash size={20} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </ActionIcon.Group>
      )}
    </Transition>
  );
};
