import { tryProbability } from "../utils/index.js";
import Racetrack from "./Racetrack.js";
import Vehicle from "./Vehicle";

export default class Bike extends Vehicle {
  constructor(model, traction, minMoves, maxMoves) {
    super(model, traction, minMoves, maxMoves);
    this.isFallen = false;
  }

  /**
   * @param {import("./Racetrack.js").default} circuit
   * @returns boolean
   */ // PASS THIS METHOD TO DRIVER
  setAndTryBikeFall(circuit) {
    let bikeFallPercentage = 0.05;
    const percetagesCasesMap = [
      {
        weather: Racetrack.WEATHER.rainy,
        traction: Vehicle.TRACTION.hard,
        percentage: 0.3,
      },
      {
        weather: Racetrack.WEATHER.wet,
        traction: Vehicle.TRACTION.hard,
        percentage: 0.2,
      },
      {
        weather: Racetrack.WEATHER.wet,
        traction: Vehicle.TRACTION.medium,
        percentage: 0.1,
      },
    ];

    percetagesCasesMap.forEach((percetageCase) => {
      if (
        percetageCase.weather === circuit.weather &&
        percetageCase.traction === this.traction
      )
        bikeFallPercentage = percetageCase.percentage;
    });

    this.isFallen = true;

    return tryProbability(bikeFallPercentage);
  }

  getNextMove() {
    if (this.isFallen) return 0;
  }
}
