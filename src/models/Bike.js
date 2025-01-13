import { getRandomNumber, tryProbability } from "../utils/index.js";
import Racetrack from "./Racetrack.js";
import Vehicle from "./Vehicle";

export default class Bike extends Vehicle {
  isFallen = false;
  movementsUntilComback = 0;

  constructor(model, traction, minMoves, maxMoves) {
    super(model, traction, minMoves, maxMoves);
  }

  /**
   * @param {import("./Racetrack.js").default} circuit
   * @returns boolean
   */
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
    this.movementsUntilComback = 5;

    return tryProbability(bikeFallPercentage);
  }

  accelerateAndGetMoves() {
    if (this.isFallen) {
      if (this.movementsUntilComback <= 5 && this.movementsUntilComback > 0)
        this.movementsUntilComback--;
      if (this.movementsUntilComback === 0) this.isFallen = false;
      return 0;
    }

    const movesMap = [
      { traction: Vehicle.TRACTION.hard, extraMoves: 5 },
      { traction: Vehicle.TRACTION.medium, extraMoves: 2 },
    ];

    let moves = getRandomNumber(this.minMoves, this.maxMoves);

    movesMap.forEach((moveCase) => {
      if (moveCase.traction === this.traction) {
        moves += moveCase.extraMoves;
      }
    });

    return moves;
  }
}
