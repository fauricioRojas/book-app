export type LanguageType = "es" | "en";

type Language = { [K in LanguageType]: string };

export interface ILanguageTranslation extends Language {
  vehicles: string;
  pets: string;
  settings: string;
  theme: string;
  language: string;
  cost: string;
  save: string;
  cancel: string;
  delete: string;
  addVehicle: string;
  deleteVehicle: string;
  newVehicle: string;
  savedVehicle: string;
  notSavedVehicle: string;
  vehicleDeleteConfirmation: string;
  addPet: string;
  deletePet: string;
  newPet: string;
  savedPet: string;
  notSavedPet: string;
  petDeleteConfirmation: string;
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
  or: string;
  openCamera: string;
  car: string;
  motorcycle: string;
  dog: string;
  cat: string;
  back: string;
  home: string;
  petNotFound: string;
  vehicleNotFound: string;
  weAresorry: string;
  tryThesePages: string;
  // Form error messages
  required: string;
  validEmail: string;
  validPhoneNumber: string;
  validYear: string;
}
