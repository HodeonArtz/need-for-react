import { useParams } from "react-router-dom";

const VehicleEdit = () => {
  const { id: vehicleId } = useParams();
  return <div>{vehicleId}</div>;
};

export default VehicleEdit;
