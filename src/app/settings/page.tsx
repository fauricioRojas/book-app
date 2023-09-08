import { Divider, FlexWrap } from "@/shared/components";
import { CurrencySelector } from "./currency-selector";
import { LanguageSelector } from "./language-selector";
import { LengthSelector } from "./length-selector";
import { ThemeSelector } from "./theme-selector";
import { WeightSelector } from "./weight-selector";
import { SettingsHeader } from "./settings-header";

const Settings = () => (
  <main>
    <SettingsHeader />
    <FlexWrap direction="column" gap={2}>
      <ThemeSelector />
      <Divider />
      <LanguageSelector />
      <Divider />
      <CurrencySelector />
      <Divider />
      <LengthSelector />
      <Divider />
      <WeightSelector />
    </FlexWrap>
  </main>
);

export default Settings;
