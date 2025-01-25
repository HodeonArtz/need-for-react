import { Bike, Car } from "../models";

// List of default vehicles
export const defaultVehicles = [
  new Bike({
    color: "#696969",
    minMoves: 3,
    maxMoves: 6,
    model: "Ducati Scrambler",
    traction: "medium",
  }),
  new Car({
    color: "#E9ECEF",
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
];
