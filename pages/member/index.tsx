import type { NextPage } from 'next';

import MemberLayout from 'layouts/member';
import OverviewContent from 'components/organisms/OverviewContent';

const MemberIndexPage: NextPage = () => (
  <MemberLayout id="overview">
    <OverviewContent />
  </MemberLayout>
);

export default MemberIndexPage;
