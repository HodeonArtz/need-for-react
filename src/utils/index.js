/**
 *
 * @param {number} percentage Percentage (decimal between 0 and 1)
 * @returns boolean
 */
export function tryProbability(percentage) {
  const successThreshold = 1 - 1 / percentage;
  const numberResult = getRandomNumber();
  return numberResult < successThreshold;
}

export function getRandomNumber(min = 0, max = 1) {
  return Math.random() * (max - min) + min;
}
