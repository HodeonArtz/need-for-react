import { z } from "zod";
import { useEntitiesState } from "../hooks/useEntitiesState";

export const vehicleFormSchema = (vehicleToEdit) => {
  return z.object({
    model: z
      .string()
      .trim()
      .min(1, "Model name is required")
      .refine(
        (inputModel) => {
          const { vehicles } = useEntitiesState.getState();
          const vehiclesModels = vehicles.map((vehicle) =>
            vehicle.model.trim().toLowerCase()
          );

          if (vehicleToEdit) {
            const otherVehicleModels = vehiclesModels.filter(
              (model) => model !== vehicleToEdit.model.toLowerCase()
            );
            return !otherVehicleModels.includes(inputModel.toLowerCase());
          }

          return !vehiclesModels.includes(inputModel.toLowerCase());
        },
        { message: "This model is already added" }
      ),
    color: z
      .string()
      .regex(/^#[0-9A-F]{6}$/i, "Color must be a valid HEX value"),
  });
};
