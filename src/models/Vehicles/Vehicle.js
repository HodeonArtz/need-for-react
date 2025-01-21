import { v4 } from "uuid";
import { getRandomNumber } from "../../utils";

/**
 * @typedef {"soft" | "medium" | "hard"} Traction
 */

export default class Vehicle {
  static TRACTION = {
    soft: "soft",
    medium: "medium",
    hard: "hard",
  };

  /**
   * @type {string}
   */
  #id;
  /**
   *
   * @param {string} model
   * @param {Traction} traction
   * @param {number} minMoves
   * @param {number} maxMoves
   */

  /**
   * @type {string}
   */
  model;

  /**
   * @type {Traction}
   */
  traction;

  /**
   * @type {number}
   */
  minMoves;

  /**
   * @type {number}
   */
  maxMoves;

  /**
   * @type {string}
   */
  color;

  /**
   *
   * @param {{ model: string, traction: Traction, minMoves: number, maxMoves: number,color: string }} Properties
   */
  constructor({ model, traction, minMoves, maxMoves, color }) {
    this.#id = v4();
    this.model = model;
    this.traction = traction;
    this.minMoves = minMoves;
    this.maxMoves = maxMoves;
    this.color = color;
  }

  accelerateAndGetMoves() {
    return getRandomNumber(this.minMoves, this.maxMoves);
  }

  get id() {
    return this.#id;
  }
}
