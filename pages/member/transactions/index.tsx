import type { NextPage } from 'next';

import MemberLayout from 'layouts/member';
import TransactionsContent from 'components/organisms/TransactionsContent';

const MemberTransactionPage: NextPage = () => (
  <MemberLayout id="transactions">
    <TransactionsContent />
  </MemberLayout>
);

export default MemberTransactionPage;
