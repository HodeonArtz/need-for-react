import { create } from "zustand";
import { Driver } from "../models";

/**
 * @typedef {import("../models/Participant/Driver").default} Driver
 * @typedef {import("../models").Vehicle} Vehicle
 * @typedef {import("../models").Racetrack} Racetrack
 * @typedef {{drivers: Driver[], vehicles: Vehicle[], racetracks: Racetrack[], addDriver: (driver: Driver) => void, updateDriver: (updatedDriver: Driver) => void, deleteDriver: (id: string) => void, addVehicle: (vehicle: Vehicle) => void, updateVehicle: (updatedVehicle: Vehicle) => void, deleteVehicle: (id: string) => void,addRacetrack: (racetrack: Racetrack) => void, updateRacetrack: (updatedRacetrack: Racetrack) => void, deleteRacetrack: (id: string) => void}} entitiesStateInterface
 */

export const useEntitiesState = create(
  /**
   * Description placeholder
   *
   * @param {import("zustand").StateCreator<{entitiesStateInterface},[],[]>} set
   * @returns {entitiesStateInterface}
   */
  (set) => ({
    drivers: [new Driver({ name: "Juan" })],
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
  })
);
