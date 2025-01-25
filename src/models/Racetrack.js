import { v4 } from "uuid";

/**
 * @typedef {"rainy"|"wet"|"dry"} Weather
 */

export default class Racetrack {
  static WEATHER = {
    rainy: "rainy",
    wet: "wet",
    dry: "dry",
  };

  /**
   * @type {string}
   */
  #id;

  /**
   * @type {string}
   */
  name;

  /**
   *
   */
  weather;

  /**
   * @param {{name: string, weather: Weather, trackLengthKm: number}} properties.
   */
  constructor({ name, weather, trackLengthKm }) {
    this.#id = v4();
    this.name = name;
    this.weather = weather;
    this.trackLengthKm = trackLengthKm * 15;
  }

  setId(id) {
    this.#id = id;
  }

  get id() {
    return this.#id;
  }
}
