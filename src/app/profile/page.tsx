import { Account } from "./account";
import { ProfileHeader } from "./profile-header";
import { SettingsAndPreferences } from "./settings-and-preferences";

const ProfilePage = () => (
  <main>
    <ProfileHeader />
    <Account />
    <SettingsAndPreferences />
  </main>
);

export default ProfilePage;
