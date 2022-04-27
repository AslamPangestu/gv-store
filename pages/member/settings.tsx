import type { NextPage } from 'next';

import MemberLayout from 'layouts/member';
import SettingsContent from 'components/organisms/SettingsContent';

const MemberSettingsPage: NextPage = () => (
  <MemberLayout>
    <SettingsContent />
  </MemberLayout>
);

export default MemberSettingsPage;
