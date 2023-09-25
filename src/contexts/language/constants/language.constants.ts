import type { LanguageTranslation, LanguageType } from "../language.types";
import { ENGLISH } from "./english.constants";
import { SPANISH } from "./spanish.constants";

export const LANGUAGES: Record<LanguageType, LanguageTranslation> = {
  en: ENGLISH,
  es: SPANISH,
};

export const languageTypes: LanguageType[] = ["es", "en"];
