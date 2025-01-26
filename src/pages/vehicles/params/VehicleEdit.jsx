import { useNavigate, useParams } from "react-router-dom";
import { useEntitiesState } from "../../../hooks/useEntitiesState";
import VehicleFormScreen from "../../../components/Vehicles/VehicleFormScreen";

const VehicleEdit = () => {
  const navigate = useNavigate();

  const { id: vehicleId } = useParams();
  const vehicles = useEntitiesState((s) => s.vehicles);
  const foundVehicle = vehicles.find((vehicle) => vehicle.id === vehicleId);
  if (!foundVehicle) {
    navigate("/vehicles");
    return null;
  }
  return <VehicleFormScreen vehicleToEdit={foundVehicle} />;
};

export default VehicleEdit;
