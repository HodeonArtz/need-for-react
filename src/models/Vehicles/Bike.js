import { tryProbability } from "../../utils";
import { percentagesCasesMap } from "./percentagesCasesMap.js";
import Vehicle from "./Vehicle.js";

export default class Bike extends Vehicle {
  isFallen = false;
  movementsUntilComback = 0;

  /**
   * @param {import("../Racetrack.js").default} circuit
   * @returns boolean
   */
  setAndTryBikeFall(circuit) {
    let bikeFallPercentage = 0.05;

    percentagesCasesMap.forEach((percetageCase) => {
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

    const movesConditionsMap = [
      { traction: Vehicle.TRACTION.hard, extraMoves: 5 },
      { traction: Vehicle.TRACTION.medium, extraMoves: 2 },
    ];

    let moves = super.accelerateAndGetMoves();

    movesConditionsMap.forEach((moveCase) => {
      if (moveCase.traction === this.traction) {
        moves += moveCase.extraMoves;
      }
    });

    return moves;
  }
}
