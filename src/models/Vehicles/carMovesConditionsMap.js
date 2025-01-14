import Racetrack from "../Racetrack";
import Vehicle from "./Vehicle";

/**
 * carMovesConditionsMap
 *
 * An array of conditions that will set a car some extra moves.
 */
export const carMovesConditionsMap = [
  {
    traction: Vehicle.TRACTION.soft,
    weather: Racetrack.WEATHER.rainy,
    extraMoves: 4,
  },
  {
    traction: Vehicle.TRACTION.soft,
    weather: Racetrack.WEATHER.wet,
    extraMoves: 2,
  },
  {
    traction: Vehicle.TRACTION.medium,
    weather: Racetrack.WEATHER.rainy,
    extraMoves: 2,
  },
  {
    traction: Vehicle.TRACTION.medium,
    weather: Racetrack.WEATHER.wet,
    extraMoves: 2,
  },
  {
    traction: Vehicle.TRACTION.medium,
    weather: Racetrack.WEATHER.dry,
    extraMoves: 2,
  },
  {
    traction: Vehicle.TRACTION.hard,
    weather: Racetrack.WEATHER.wet,
    extraMoves: 2,
  },
  {
    traction: Vehicle.TRACTION.hard,
    weather: Racetrack.WEATHER.dry,
    extraMoves: 4,
  },
];
