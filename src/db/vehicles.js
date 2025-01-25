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
    color: "#FF6B6B",
    minMoves: 4,
    maxMoves: 8,
    model: "Kawasaki Ninja",
    traction: "high",
  }),
  new Car({
    color: "#C2255C",
    minMoves: 4,
    maxMoves: 7,
    model: "Ford Fiesta",
    traction: "medium",
  }),
  new Bike({
    color: "#BE4BDB",
    minMoves: 5,
    maxMoves: 9,
    model: "Yamaha MT-07",
    traction: "medium",
  }),
  new Car({
    color: "#7048E8",
    minMoves: 3,
    maxMoves: 6,
    model: "Opel Corsa",
    traction: "medium",
  }),
  new Bike({
    color: "#4263EB",
    minMoves: 6,
    maxMoves: 10,
    model: "BMW R 1250 GS",
    traction: "high",
  }),
  new Car({
    color: "#1098AD",
    minMoves: 2,
    maxMoves: 5,
    model: "Volkswagen Golf",
    traction: "medium",
  }),
  new Bike({
    color: "#FAB005",
    minMoves: 3,
    maxMoves: 7,
    model: "Harley Davidson Sportster",
    traction: "medium",
  }),
  new Car({
    color: "#69DB7C",
    minMoves: 5,
    maxMoves: 8,
    model: "Toyota Corolla",
    traction: "high",
  }),
];
