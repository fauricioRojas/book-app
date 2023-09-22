export type LanguageType = "es" | "en";

type Language = { [K in LanguageType]: string };

export interface ILanguageTranslation extends Language {
  vehicles: string;
  pets: string;
  profile: string;
  settingsAndPreferences: string;
  theme: string;
  language: string;
  cost: string;
  date: string;
  save: string;
  cancel: string;
  delete: string;
  addVehicle: string;
  newVehicle: string;
  savedVehicle: string;
  notSavedVehicle: string;
  deletedVehicle: string;
  notDeletedVehicle: string;
  vehicleDeleteConfirmation: string;
  noVehicles: string;
  addPet: string;
  newPet: string;
  savedPet: string;
  notSavedPet: string;
  deletedPet: string;
  notDeletedPet: string;
  petDeleteConfirmation: string;
  noPets: string;
  maintenances: string;
  noMaintenances: string;
  newMaintenance: string;
  savedMaintenance: string;
  notSavedMaintenance: string;
  deletedMaintenance: string;
  notDeletedMaintenance: string;
  maintenanceDeleteConfirmation: string;
  procedures: string;
  noProcedures: string;
  newProcedure: string;
  savedProcedure: string;
  notSavedProcedure: string;
  deletedProcedure: string;
  notDeletedProcedure: string;
  procedureDeleteConfirmation: string;
  engineOilChange: string;
  tireReplacement: string;
  refuel: string;
  batteryReplacement: string;
  linedUpAndBalanced: string;
  shockAbsorbersReplacement: string;
  brakeFibersReplacement: string;
  sideMirrorsReplacement: string;
  lightBulbReplacement: string;
  engineReplacement: string;
  radiatorReplacement: string;
  brushReplacement: string;
  engineAirFilterChange: string;
  cabinAirFilterChange: string;
  coolantChange: string;
  brakesAdjustment: string;
  washed: string;
  beltChange: string;
  oilFilterChange: string;
  ballJointsChange: string;
  chainChange: string;
  handleBarChange: string;
  motorcycleSeatChange: string;
  gearChange: string;
  cablesChange: string;
  plateNumber: string;
  paintDetailing: string;
  motorcycleFuseReplacement: string;
  bushingChange: string;
  grease: string;
  rimsChange: string;
  acRevision: string;
  fuelFilterChange: string;
  carFusesReplacement: string;
  brakeFluidChange: string;
  injectorCleaning: string;
  hosesReplacement: string;
  carburetorReplacement: string;
  vaccine: string;
  breed: string;
  brand: string;
  model: string;
  type: string;
  dateOfBirth: string;
  dateOfPurchase: string;
  description: string;
  photo: string;
  name: string;
  browse: string;
  or: string;
  openCamera: string;
  car: string;
  motorcycle: string;
  truck: string;
  pickup: string;
  dog: string;
  cat: string;
  bull: string;
  back: string;
  home: string;
  petNotFound: string;
  vehicleNotFound: string;
  procedureNotFound: string;
  maintenanceNotFound: string;
  weAresorry: string;
  tryThesePages: string;
  search: string;
  noResultsFound: string;
  weight: string;
  nextDate: string;
  dewormer: string;
  hairCut: string;
  nailsCut: string;
  bath: string;
  hairBrushing: string;
  pills: string;
  surgery: string;
  rabbit: string;
  hamster: string;
  pig: string;
  horse: string;
  optional: string;
  currency: string;
  dollar: string;
  colon: string;
  length: string;
  kilometers: string;
  meters: string;
  miles: string;
  grams: string;
  pounds: string;
  tractor: string;
  trailer: string;
  bike: string;
  editPet: string;
  editVehicle: string;
  editProcedure: string;
  editMaintenance: string;
  editedPet: string;
  notEditedPet: string;
  editedVehicle: string;
  notEditedVehicle: string;
  editedProcedure: string;
  notEditedProcedure: string;
  editedMaintenance: string;
  notEditedMaintenance: string;
  nextDateHint: string;
  email: string;
  password: string;
  signIn: string;
  signInWithEmail: string;
  signInWithGithub: string;
  signInWithFacebook: string;
  account: string;
  signInError: string;
  signUp: string;
  signUpError: string;
  signOutError: string;
  dontHaveAnAccount: string;
  alreadyHaveAnAccount: string;
  reminders: string;
  noReminders: string;
  noRemindersMessage: string;
  // Form error messages
  required: string;
  validEmail: string;
  validPhoneNumber: string;
  validYear: string;
}
