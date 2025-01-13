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
   * @param {number} trackLengthKm length in movements * 15
   */
  constructor(name, weather, trackLengthKm) {
    this.name = name;
    this.weather = weather;
    this.trackLengthKm = trackLengthKm * 15;
  }
}
