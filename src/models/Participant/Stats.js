export default class Stats {
  history = [0, 0, 0, 0];
  constructor(
    firstPlaces = 0,
    secondPlaces = 0,
    thirdPlaces = 0,
    otherPlaces = 0
  ) {
    this.history = [firstPlaces, secondPlaces, thirdPlaces, otherPlaces];
  }
  set finalPlace(positionResult) {
    if (positionResult <= 3) this.history[positionResult]++;
    else this.history[3]++;
  }

  get firstPlaces() {
    return this.history[0];
  }
  get secondPlaces() {
    return this.history[1];
  }
  get thirdPlaces() {
    return this.history[2];
  }
  get otherPlaces() {
    return this.history[3];
  }

  resetStats() {
    this.history = [0, 0, 0, 0];
  }
}
