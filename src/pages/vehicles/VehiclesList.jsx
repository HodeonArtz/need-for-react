import { useEntitiesState } from "../../hooks/useEntitiesState";

const VehiclesList = () => {
  const vehicles = useEntitiesState((s) => s.vehicles);
  return (
    <div>
      {vehicles.map((vehicle) => (
        <p>{vehicle.id}</p>
      ))}
    </div>
  );
};

export default VehiclesList;
