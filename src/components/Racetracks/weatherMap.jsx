import { IconCloudRain, IconDroplet, IconSun } from "@tabler/icons-react";
import { Racetrack } from "../../models";

export const weatherMap = [
  { weather: Racetrack.WEATHER.dry, icon: IconSun, color: "yellow" },
  { weather: Racetrack.WEATHER.wet, icon: IconDroplet, color: "cyan" },
  {
    weather: Racetrack.WEATHER.rainy,
    icon: IconCloudRain,
    color: "indigo",
  },
];
