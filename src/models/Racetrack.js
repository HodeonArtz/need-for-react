export default class Racetrack {
  static WEATHER = {
    rainy: "rainy",
    wet: "wet",
    dry: "dry",
  };
  /**
   *
   * @param {string} name Racetrack name.
   * @param {"rainy"|"wet"|"dry"} weather Racectrack weather: Rainy, wet or dry
   * @param {number} trackLength length in movements
   */
  constructor(name, weather, trackLength) {
    this.name = name;
    this.weather = weather;
    this.trackLength = trackLength;
  }
}
