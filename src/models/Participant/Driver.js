import { v4 } from "uuid";
import Stats from "./Stats.js";

/**
 * An avatar object.
 * @typedef {{ avatarStyle: string; topType: string; accessoriesType: string; hairColor: string; facialHairType: string; facialHairColor: string; clotheType: string; eyeType: string; eyebrowType: string; mouthType: string; skinColor: string; }} Avatar
 *
 * @typedef {import("../Vehicles/Vehicle.js").default} Vehicle
 * @typedef {import("./Stats.js").default} Stats
 */

export default class Driver {
  /**
   * @type {Avatar}
   */
  static defaultAvatar = {
    avatarStyle: "Circle",
    topType: "LongHairCurly",
    accessoriesType: "Blank",
    hairColor: "BrownDark",
    facialHairType: "BeardMajestic",
    facialHairColor: "BrownDark",
    clotheType: "BlazerShirt",
    eyeType: "Default",
    eyebrowType: "Default",
    mouthType: "Default",
    skinColor: "Light",
  };

  /**
   * @type {string}
   */
  #id;
  /**
   * Avatar for driver
   *
   * @type {Avatar}
   */
  avatar;

  /**
   * @type {string | null}
   */
  vehicleId;

  /**
   * @type {Stats}
   */
  stats;

  /**
   * @param {{name: string, avatar?: Avatar, vehicleId?: string | null,stats?: Stats}} properties
   */
  constructor({
    name,
    avatar = Driver.defaultAvatar,
    vehicleId = null,
    stats = new Stats(),
  }) {
    this.#id = v4();
    this.name = name;
    this.vehicleId = vehicleId;
    this.stats = stats;
    this.avatar = avatar;
  }

  setId(id) {
    this.#id = id;
  }

  get id() {
    return this.#id;
  }
}
