import { v4 } from "uuid";
import { getRandomNumber } from "../../utils";

export default class Vehicle {
  static TRACTION = {
    soft: "soft",
    medium: "medium",
    hard: "hard",
  };

  #id;
  /**
   *
   * @param {string} model
   * @param {"soft" | "medium" | "hard"} traction
   * @param {number} minMoves
   * @param {number} maxMoves
   */
  constructor(model, traction, minMoves, maxMoves) {
    this.#id = v4();
    this.model = model;
    this.traction = traction;
    this.minMoves = minMoves;
    this.maxMoves = maxMoves;
  }

  accelerateAndGetMoves() {
    return getRandomNumber(this.minMoves, this.maxMoves);
  }

  get id() {
    return this.#id;
  }
}
