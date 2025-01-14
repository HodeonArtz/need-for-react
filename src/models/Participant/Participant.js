import Stats from "./Stats";

export default class Participant {
  constructor(name, vehicle = null, stats = new Stats()) {
    this.name = name;
    this.vehicle = vehicle;
    this.stats = stats;
  }
}
