import Masonry from "react-layout-masonry";
import VehicleCard from "../../components/Vehicles/VehicleCard";
import { useEntitiesState } from "../../hooks/useEntitiesState";

const VehiclesList = () => {
  const vehicles = useEntitiesState((s) => s.vehicles);
  return (
    <Masonry columns={3} gap={24}>
      {vehicles.map((vehicle) => (
        <VehicleCard vehicle={vehicle} key={vehicle.id} />
      ))}
    </Masonry>
  );
};

export default VehiclesList;
