import { Divider, FlexWrap, Typography } from "@/shared/components";
import { CurrencySelector } from "./currency-selector";
import { LanguageSelector } from "./language-selector";
import { LengthSelector } from "./length-selector";
import { ThemeSelector } from "./theme-selector";
import { WeightSelector } from "./weight-selector";
import { SettingsHeader } from "./settings-header";
import { UserLoggedIn } from "./user-logged-in";

const Settings = () => (
  <main>
    <SettingsHeader />
    <FlexWrap direction="column" gap={2} mb={8}>
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
    <UserLoggedIn />
  </main>
);

export default Settings;
