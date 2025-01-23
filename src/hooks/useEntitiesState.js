import { create } from "zustand";
import { Bike, Car, Driver, Vehicle } from "../models";

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
    vehicles: [
      // Lista de coches y motos con valores coherentes
      new Bike({
        color: "#f1c40f",
        minMoves: 3,
        maxMoves: 6,
        model: "Ducati Scrambler",
        traction: "medium",
      }),
      new Car({
        color: "#9b59b6",
        minMoves: 6,
        maxMoves: 10,
        model: "BMW Serie 3",
        traction: "high",
      }),
      new Bike({
        color: "#3498db",
        minMoves: 4,
        maxMoves: 8,
        model: "Kawasaki Ninja",
        traction: "high",
      }),
      new Car({
        color: "#3498db",
        minMoves: 4,
        maxMoves: 7,
        model: "Ford Fiesta",
        traction: "medium",
      }),
      new Bike({
        color: "#2ecc71",
        minMoves: 5,
        maxMoves: 9,
        model: "Yamaha MT-07",
        traction: "medium",
      }),
      new Car({
        color: "#ff6863",
        minMoves: 3,
        maxMoves: 6,
        model: "Opel Corsa",
        traction: "medium",
      }),
      new Bike({
        color: "#9b59b6",
        minMoves: 6,
        maxMoves: 10,
        model: "BMW R 1250 GS",
        traction: "high",
      }),
      new Car({
        color: "#f1c40f",
        minMoves: 2,
        maxMoves: 5,
        model: "Volkswagen Golf",
        traction: "medium",
      }),
      new Bike({
        color: "#ff6863",
        minMoves: 3,
        maxMoves: 7,
        model: "Harley Davidson Sportster",
        traction: "medium",
      }),
      new Car({
        color: "#2ecc71",
        minMoves: 5,
        maxMoves: 8,
        model: "Toyota Corolla",
        traction: "high",
      }),
    ],
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
