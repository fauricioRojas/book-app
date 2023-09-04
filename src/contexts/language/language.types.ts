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
  addVehicle: string;
  newVehicle: string;
  savedVehicle: string;
  notSavedVehicle: string;
  addPet: string;
  newPet: string;
  savedPet: string;
  notSavedPet: string;
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
  // Form error messages
  required: string;
  validEmail: string;
  validPhoneNumber: string;
  validYear: string;
}
