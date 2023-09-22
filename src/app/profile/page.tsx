import { ProfileHeader } from "./profile-header";
import { Account } from "./account";
import { SettingsAndPreferences } from "./settings-and-preferences";

const ProfilePage = () => (
  <main>
    <ProfileHeader />
    <Account />
    <SettingsAndPreferences />
  </main>
);

export default ProfilePage;
