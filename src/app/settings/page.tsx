import { SettingsHeader } from "./settings-header";
import { Account } from "./account";
import { GeneralSettings } from "./general-settings";

const SettingsPage = () => (
  <main>
    <SettingsHeader />
    <GeneralSettings />
    <Account />
  </main>
);

export default SettingsPage;
