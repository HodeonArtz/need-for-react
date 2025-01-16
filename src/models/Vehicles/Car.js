import { getRandomNumber } from "../../utils/index.js";
import { carMovesConditionsMap } from "./carMovesConditionsMap.js";
import Vehicle from "./Vehicle";

export default class Car extends Vehicle {
  /**
   * @param {import("../Racetrack.js").default} circuit
   * @returns boolean
   */
  accelerateAndGetMoves(circuit) {
    let moves = getRandomNumber(this.minMoves, this.maxMoves);
    carMovesConditionsMap.forEach((carMove) => {
      if (
        this.traction === carMove.traction &&
        circuit.weather === carMove.weather
      )
        moves += carMove.extraMoves;
    });
    return moves;
  }
}
