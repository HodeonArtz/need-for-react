import { create } from "zustand";

export const useEntities = create((set) => ({
  drivers: [],
  vehicles: [],
  racetracks: [],
  addDriver: (driver) =>
    set((entities) => ({ drivers: [...entities.drivers, driver] })),
  updateDriver: (updatedDriver) =>
    set((entities) => ({
      drivers: entities.drivers.map((driver) =>
        driver.id === updatedDriver.id ? updatedDriver : driver
      ),
    })),
  deleteDriver: (id) =>
    set((entities) => ({
      drivers: entities.drivers.filter((driver) => driver.id !== id),
    })),

  addVehicle: (vehicle) =>
    set((entities) => ({ vehicles: [...entities.vehicles, vehicle] })),
  updateVehicle: (updatedVehicle) =>
    set((entities) => ({
      vehicles: entities.vehicles.map((vehicle) =>
        vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle
      ),
    })),
  deleteVehicle: (id) =>
    set((entities) => ({
      vehicles: entities.vehicles.filter((vehicle) => vehicle.id !== id),
    })),

  addRacetrack: (racetrack) =>
    set((entities) => ({ racetracks: [...entities.racetracks, racetrack] })),
  updateRacetrack: (updatedRacetrack) =>
    set((entities) => ({
      racetracks: entities.racetracks.map((racetrack) =>
        racetrack.id === updatedRacetrack.id ? updatedRacetrack : racetrack
      ),
    })),
  deleteRacetrack: (id) =>
    set((entities) => ({
      racetracks: entities.racetracks.filter(
        (racetrack) => racetrack.id !== id
      ),
    })),
}));
