export type LanguageType = "es" | "en";

type Language = { [K in LanguageType]: string };

export type LanguageTranslation = Language & {
  // Vehicles
  vehicles: string;
  addVehicle: string;
  newVehicle: string;
  savedVehicle: string;
  notSavedVehicle: string;
  deletedVehicle: string;
  notDeletedVehicle: string;
  vehicleDeleteConfirmation: string;
  noVehicles: string;
  noVehiclesMessage: string;
  vehicleNotFound: string;
  editVehicle: string;
  editedVehicle: string;
  notEditedVehicle: string;
  // Vehicles types
  car: string;
  motorcycle: string;
  truck: string;
  pickup: string;
  tractor: string;
  trailer: string;
  bike: string;
  // Pets
  pets: string;
  addPet: string;
  newPet: string;
  savedPet: string;
  notSavedPet: string;
  deletedPet: string;
  notDeletedPet: string;
  petDeleteConfirmation: string;
  noPets: string;
  noPetsMessage: string;
  petNotFound: string;
  editPet: string;
  editedPet: string;
  notEditedPet: string;
  // Pets types
  dog: string;
  cat: string;
  bull: string;
  rabbit: string;
  hamster: string;
  pig: string;
  horse: string;
  // Procedures
  procedures: string;
  noProcedures: string;
  newProcedure: string;
  savedProcedure: string;
  notSavedProcedure: string;
  deletedProcedure: string;
  notDeletedProcedure: string;
  procedureDeleteConfirmation: string;
  procedureNotFound: string;
  editProcedure: string;
  editedProcedure: string;
  notEditedProcedure: string;
  // Procedures types
  vaccine: string;
  dewormer: string;
  hairCut: string;
  nailsCut: string;
  bath: string;
  hairBrushing: string;
  pills: string;
  surgery: string;
  // Maintenances
  maintenances: string;
  noMaintenances: string;
  newMaintenance: string;
  savedMaintenance: string;
  notSavedMaintenance: string;
  deletedMaintenance: string;
  notDeletedMaintenance: string;
  maintenanceDeleteConfirmation: string;
  maintenanceNotFound: string;
  editMaintenance: string;
  editedMaintenance: string;
  notEditedMaintenance: string;
  // Maintenances types
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
  motorcycleGripsReplacement: string;
  // Reminders
  reminders: string;
  noReminders: string;
  noRemindersMessage: string;
  // Not found
  weAresorry: string;
  tryThesePages: string;
  noResultsFound: string;
  // Form labels
  cost: string;
  date: string;
  plateNumber: string;
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
  openCamera: string;
  weight: string;
  nextDate: string;
  optional: string;
  email: string;
  password: string;
  // Form error messages
  required: string;
  validEmail: string;
  validPhoneNumber: string;
  validYear: string;
  // Auth
  signIn: string;
  signInWithEmail: string;
  signInWithGithub: string;
  signInWithFacebook: string;
  signInError: string;
  dontHaveAnAccount: string;
  signUp: string;
  signUpError: string;
  alreadyHaveAnAccount: string;
  signOutError: string;
  // Transfers
  transfers: string;
  noTransfers: string;
  noTransfersMessage: string;
  // Other
  save: string;
  cancel: string;
  back: string;
  profile: string;
  settingsAndPreferences: string;
  theme: string;
  language: string;
  delete: string;
  or: string;
  home: string;
  search: string;
  currency: string;
  dollar: string;
  colon: string;
  length: string;
  kilometers: string;
  meters: string;
  miles: string;
  grams: string;
  pounds: string;
  nextDateHint: string;
  account: string;
};
