import { z } from "zod";
import { useEntitiesState } from "../hooks/useEntitiesState";

export const racetrackFormSchema = (racetrackToEdit) => {
  return z.object({
    name: z
      .string()
      .trim()
      .min(1, "Name name is required")
      .refine(
        (inputName) => {
          const { racetracks } = useEntitiesState.getState();
          const racetracksNames = racetracks.map((racetrack) =>
            racetrack.name.trim().toLowerCase()
          );

          if (racetrackToEdit) {
            const otherRacetrackNames = racetracksNames.filter(
              (name) => name !== racetrackToEdit.name.toLowerCase()
            );
            return !otherRacetrackNames.includes(inputName.toLowerCase());
          }

          return !racetracksNames.includes(inputName.toLowerCase());
        },
        { message: "This name is already added" }
      ),
    trackLengthKm: z.number().min(1).max(15),
  });
};
