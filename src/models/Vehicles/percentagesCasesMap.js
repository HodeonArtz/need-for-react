import Racetrack from "../Racetrack";
import Vehicle from "./Vehicle";

export const percentagesCasesMap = [
  {
    weather: Racetrack.WEATHER.rainy,
    traction: Vehicle.TRACTION.hard,
    percentage: 0.3,
  },
  {
    weather: Racetrack.WEATHER.wet,
    traction: Vehicle.TRACTION.hard,
    percentage: 0.2,
  },
  {
    weather: Racetrack.WEATHER.wet,
    traction: Vehicle.TRACTION.medium,
    percentage: 0.1,
  },
];
