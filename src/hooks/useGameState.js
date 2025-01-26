import { create } from "zustand";
import { Bike } from "../models";
import { useEntitiesState } from "./useEntitiesState";

export const useGamesState = create((set) => ({
  driversCompeting: [],
  currentRacetrack: null,
  podium: [],
  addDriver: (driver) => {
    set((state) => {
      if (
        state.driversCompeting.find(
          (driverCompeting) => driverCompeting.driver.id === driver.id
        )
      )
        return {};
      return {
        driversCompeting: [{ driver, position: 0 }, ...state.driversCompeting],
      };
    });
  },
  setRacetrack: (racetrack) => {
    set(() => ({ currentRacetrack: racetrack }));
  },
  resetGame: () => {
    set(() => ({ driversCompeting: [], currentRacetrack: null, podium: [] }));
  },
  moveVehicles: () => {
    set((state) => ({
      driversCompeting: state.driversCompeting.map(
        /**
         * @param {{driver: import("../models").Driver,position: number}} driver
         */ ({ driver, position }) => {
          /**
           * @type {import("../models").Bike | import("../models").Car}
           */
          const vehicle = useEntitiesState((s) => s.vehicles).find(
            (vehicle) => vehicle.id === driver.vehicleId
          );
          const moves = vehicle.accelerateAndGetMoves();
          /**
           * @type {{driver: import("../models").Driver, position: number}}
           */
          const driverCompeting = {
            driver,
            position,
          };
          if (position + moves >= state.currentRacetrack.trackLengthKm * 12) {
            driverCompeting.position =
              state.currentRacetrack.trackLengthKm * 12;
            if (state.podium.length < 3) {
              set((state) => ({
                podium: [...state.podium, driverCompeting.driver],
              }));
              driverCompeting.driver.stats.finalPlace(state.podium.length);
            } else {
              driverCompeting.driver.stats.finalPlace(4);
            }
            return driverCompeting;
          }
          if (vehicle.constructor.name === Bike.name && vehicle.isFallen)
            return driverCompeting;
          driverCompeting.position += moves;

          return driverCompeting;
        }
      ),
    }));
  },
}));
