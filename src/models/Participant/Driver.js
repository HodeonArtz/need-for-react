import Stats from "./Stats.js";

/**
 * An avatar object.
 * @typedef {{ avatarStyle: string; topType: string; accessoriesType: string; hairColor: string; facialHairType: string; facialHairColor: string; clotheType: string; eyeType: string; eyebrowType: string; mouthType: string; skinColor: string; }} Avatar
 *
 * @typedef {import("../Vehicles/Vehicle.js").default} Vehicle
 * @typedef {import("./Stats.js").default} Stats
 */

export default class Participant {
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
   * Avatar for driver
   *
   * @type {Avatar}
   */
  avatar;

  /**
   * @type {Vehicle}
   */
  vehicle;

  /**
   * @type {Stats}
   */
  stats;

  /**
   *
   * @param {string} name
   * @param {Vehicle | null} vehicle
   * @param {Stats} stats
   * @param {Avatar} avatar
   */
  constructor(name, avatar, vehicle = null, stats = new Stats()) {
    this.name = name;
    this.vehicle = vehicle;
    this.stats = stats;
    this.avatar = avatar;
  }
}
