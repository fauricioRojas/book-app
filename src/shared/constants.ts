import { ENGLISH } from "@/contexts/language/constants/english.constants";
import { IconName } from "./components";

export const ICON_BY_TYPE: Record<string, IconName> = {
  // Vehicle types
  [ENGLISH.car]: "car",
  [ENGLISH.motorcycle]: "motorcycle",
  [ENGLISH.truck]: "truck",
  [ENGLISH.pickup]: "pickup",
  // Maintenance types
  [ENGLISH.oilChange]: "oil",
  [ENGLISH.refuel]: "refuel",
  [ENGLISH.tireReplacement]: "tire",
  [ENGLISH.batteryReplacement]: "battery",
  [ENGLISH.linedUpAndBalanced]: "car-chasis",
  [ENGLISH.shockAbsorbersReplacement]: "shock-absorbers",
  [ENGLISH.brakeFibersReplacement]: "brake-fiber",
  [ENGLISH.sideMirrorsReplacement]: "side-mirror",
  [ENGLISH.lightBulbReplacement]: "light-bulb",
  [ENGLISH.engineReplacement]: "engine",
  [ENGLISH.radiatorReplacement]: "radiator",
  [ENGLISH.brushReplacement]: "brush",
  [ENGLISH.brushReplacement]: "brush",
  [ENGLISH.engineAirFilterChange]: "engine-air-filter",
  [ENGLISH.acAirFilterChange]: "ac-air-filter",
  [ENGLISH.coolantChange]: "coolant",
  [ENGLISH.brakesAdjustment]: "brake",
  [ENGLISH.washed]: "water-drop",
  [ENGLISH.beltChange]: "belt",
  [ENGLISH.oilFilterChange]: "oil-filter",
  [ENGLISH.ballJointsChange]: "ball-joints",
  [ENGLISH.chainChange]: "chain",
  [ENGLISH.paintDetailing]: "paint-gun",
  [ENGLISH.fuseReplacement]: "fuse",
  [ENGLISH.bushingChange]: "bushing",
  [ENGLISH.handleBarChange]: "handle-bar",
  [ENGLISH.motorcycleSeatChange]: "motorcycle-seat",
  [ENGLISH.gearChange]: "gear",
  [ENGLISH.cablesChange]: "cable",
  [ENGLISH.grease]: "grease-gun",
  // Pet types
  [ENGLISH.dog]: "dog",
  [ENGLISH.cat]: "cat",
  [ENGLISH.bull]: "bull",
  // Procedure types
  [ENGLISH.vaccine]: "vaccine",
};
