export default class Vehicle {
  static TRACTION = {
    soft: "soft",
    medium: "medium",
    hard: "hard",
  };
  /**
   *
   * @param {string} model
   * @param {"soft" | "medium" | "hard"} traction
   * @param {number} minMoves
   * @param {number} maxMoves
   */
  constructor(model, traction, minMoves, maxMoves) {
    this.model = model;
    this.traction = traction;
    this.minMoves = minMoves;
    this.maxMoves = maxMoves;
  }

  getNextMove() {
    return 1;
  }
}
