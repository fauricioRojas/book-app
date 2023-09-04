import { ILanguageTranslation, LanguageType } from "../language.types";
import { ENGLISH } from "./english.constants";
import { SPANISH } from "./spanish.constants";

export const LANGUAGES: { [K in LanguageType]: ILanguageTranslation } = {
  en: ENGLISH,
  es: SPANISH,
};

export const languageTypes: LanguageType[] = ["es", "en"];
