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

/**
 * @param {string} text
 */
export function firstLetterUppercase(text) {
  return `${text[0].toUpperCase()}${text.slice(1)}`;
}

export const colorSwatch = [
  "#2e2e2e",
  "#868e96",
  "#fa5252",
  "#e64980",
  "#be4bdb",
  "#7950f2",
  "#4c6ef5",
  "#228be6",
  "#15aabf",
  "#12b886",
  "#40c057",
  "#82c91e",
  "#fab005",
  "#fd7e14",
];

export const getRandomColor = () =>
  colorSwatch[Math.floor(getRandomNumber(0, colorSwatch.length - 1))];
