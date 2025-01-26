import { Driver } from "../models";
import Stats from "../models/Participant/Stats";
import { defaultVehicles } from "./vehicles";

export const defaultDrivers = [
  new Driver({
    name: "Lewis Hamilton",
    vehicleId: defaultVehicles[0].id,
    stats: new Stats(103, 61, 38, 50),
  }),
  new Driver({
    name: "Valentino Rossi",
    vehicleId: null,
    stats: new Stats(89, 61, 40, 42),
  }),
  new Driver({
    name: "Max Verstappen",
    vehicleId: null,
    stats: new Stats(49, 28, 25, 35),
  }),
  new Driver({
    name: "Marc Márquez",
    vehicleId: null,
    stats: new Stats(59, 37, 25, 20),
  }),
  new Driver({
    name: "Sebastian Vettel",
    vehicleId: null,
    stats: new Stats(53, 38, 29, 60),
  }),
  new Driver({
    name: "Jorge Lorenzo",
    vehicleId: null,
    stats: new Stats(47, 44, 23, 25),
  }),
  new Driver({
    name: "Fernando Alonso",
    vehicleId: null,
    stats: new Stats(32, 37, 25, 150),
  }),
  new Driver({
    name: "Dani Pedrosa",
    vehicleId: null,
    stats: new Stats(31, 41, 45, 80),
  }),
  new Driver({
    name: "Charles Leclerc",
    vehicleId: null,
    stats: new Stats(5, 18, 10, 35),
  }),
  new Driver({
    name: "Andrea Dovizioso",
    vehicleId: null,
    stats: new Stats(15, 25, 33, 50),
  }),
  new Driver({
    name: "Mick Schumacher",
    vehicleId: null,
    stats: new Stats(0, 0, 0, 20),
  }),
  new Driver({
    name: "Nico Rosberg",
    vehicleId: null,
    stats: new Stats(23, 30, 19, 50),
  }),
  new Driver({
    name: "Jack Miller",
    vehicleId: null,
    stats: new Stats(4, 8, 10, 30),
  }),
  new Driver({
    name: "George Russell",
    vehicleId: null,
    stats: new Stats(1, 5, 10, 25),
  }),
  new Driver({
    name: "Fabio Quartararo",
    vehicleId: null,
    stats: new Stats(12, 14, 15, 18),
  }),
];
