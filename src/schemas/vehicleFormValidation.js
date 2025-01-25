import { z } from "zod";
import { useEntitiesState } from "../hooks/useEntitiesState";

export const vehicleFormSchema = z.object({
  model: z
    .string()
    .trim()
    .min(1, "Model name is required")
    .refine(
      (model) => {
        const { vehicles } = useEntitiesState.getState();
        const vehiclesModels = vehicles.map((vehicle) =>
          vehicle.model.trim().toLowerCase()
        );
        return !vehiclesModels.includes(model.toLowerCase());
      },
      { message: "This model is already added" }
    ),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, "Color must be a valid HEX value"),
});
