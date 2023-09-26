import { ENGLISH } from "@/contexts/language/constants/english.constants";
import type { IconName } from "./components";

export const ICON_BY_TYPE: Record<string, IconName> = {
  // Vehicle types
  [ENGLISH.bike]: "bike",
  [ENGLISH.motorcycle]: "motorcycle",
  [ENGLISH.car]: "car",
  [ENGLISH.truck]: "truck",
  [ENGLISH.pickup]: "pickup",
  [ENGLISH.tractor]: "tractor",
  [ENGLISH.trailer]: "trailer",
  // Maintenance types
  [ENGLISH.engineOilChange]: "oil",
  [ENGLISH.refuel]: "petrol-pump",
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
  [ENGLISH.cabinAirFilterChange]: "ac-air-filter",
  [ENGLISH.coolantChange]: "coolant",
  [ENGLISH.brakesAdjustment]: "brake",
  [ENGLISH.washed]: "water-drop",
  [ENGLISH.beltChange]: "belt",
  [ENGLISH.oilFilterChange]: "oil-filter",
  [ENGLISH.ballJointsChange]: "ball-joints",
  [ENGLISH.chainChange]: "chain",
  [ENGLISH.paintDetailing]: "paint-gun",
  [ENGLISH.motorcycleFuseReplacement]: "fuses",
  [ENGLISH.bushingChange]: "bushing",
  [ENGLISH.handleBarChange]: "handle-bar",
  [ENGLISH.motorcycleSeatChange]: "motorcycle-seat",
  [ENGLISH.gearChange]: "gear",
  [ENGLISH.cablesChange]: "cable",
  [ENGLISH.grease]: "grease-gun",
  [ENGLISH.rimsChange]: "rim",
  [ENGLISH.acRevision]: "ac",
  [ENGLISH.fuelFilterChange]: "fuel-filter",
  [ENGLISH.carFusesReplacement]: "car-fuse",
  [ENGLISH.brakeFluidChange]: "brake-fluid-bottle",
  [ENGLISH.injectorCleaning]: "injector",
  [ENGLISH.hosesReplacement]: "hose",
  [ENGLISH.carburetorReplacement]: "carburetor",
  [ENGLISH.motorcycleGripsReplacement]: "motorcycle-grip",
  // Pet types
  [ENGLISH.dog]: "dog",
  [ENGLISH.cat]: "cat",
  [ENGLISH.bull]: "bull",
  [ENGLISH.rabbit]: "rabbit",
  [ENGLISH.hamster]: "hamster",
  [ENGLISH.pig]: "pig",
  [ENGLISH.horse]: "horse",
  // Procedure types
  [ENGLISH.vaccine]: "syringe",
  [ENGLISH.dewormer]: "tick",
  [ENGLISH.hairCut]: "hair-cut",
  [ENGLISH.nailsCut]: "pet-nail-clippers",
  [ENGLISH.bath]: "pet-bath",
  [ENGLISH.hairBrushing]: "pet-grooming-brush",
  [ENGLISH.pills]: "pills-bottle",
  [ENGLISH.surgery]: "surgery-knife",
};

export enum ROUTES {
  HOME = "/",
  MAINTENANCES = "/maintenances",
  PETS = "/pets",
  PROCEDURES = "/procedures",
  PROFILE = "/profile",
  REMINDERS = "/reminders",
  SIGN_IN = "/sign-in",
  SIGN_UP = "/sign-up",
  TRANSFERS = "/transfers",
  VEHICLES = "/vehicles",
}
