import { LanguageSelector, ThemeToggle } from "@/components";
import { Card, FlexWrap } from "@/shared/components";
import { SettingsHeader } from "./settings-header";

const Settings = () => (
  <main>
    <SettingsHeader />
    <Card>
      <FlexWrap direction="column" gap={4}>
        <ThemeToggle />
        <LanguageSelector />
      </FlexWrap>
    </Card>
  </main>
);

export default Settings;
