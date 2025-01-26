import { IconCloudRain, IconDroplet, IconSun } from "@tabler/icons-react";
import { Racetrack } from "../../models";
import rainyImg from "../../assets/img/rainy.jpg";
import dryImg from "../../assets/img/sunny.jpg";
import wetImg from "../../assets/img/wet.jpg";
export const weatherMap = [
  {
    weather: Racetrack.WEATHER.dry,
    icon: IconSun,
    color: "yellow",
    preview: dryImg,
  },
  {
    weather: Racetrack.WEATHER.wet,
    icon: IconDroplet,
    color: "cyan",
    preview: wetImg,
  },
  {
    weather: Racetrack.WEATHER.rainy,
    icon: IconCloudRain,
    color: "indigo",
    preview: rainyImg,
  },
];
