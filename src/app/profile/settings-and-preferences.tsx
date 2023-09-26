'use client';

import { useLanguage } from "@/contexts";
import { FlexWrap, Typography } from "@/shared/components";
import { CurrencySelector } from "./currency-selector";
import { LanguageSelector } from "./language-selector";
import { LengthSelector } from "./length-selector";
import { ThemeSelector } from "./theme-selector";
import { WeightSelector } from "./weight-selector";

export const SettingsAndPreferences = () => {
  const { translation } = useLanguage();

  return (
    <FlexWrap direction="column" gap={2}>
      <Typography variant="h6" fontWeight="bold" mb={1}>
        {translation.settingsAndPreferences}
      </Typography>
      <ThemeSelector />
      <LanguageSelector />
      <CurrencySelector />
      <LengthSelector />
      <WeightSelector />
    </FlexWrap>
  );
};
