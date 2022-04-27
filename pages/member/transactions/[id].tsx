import type { NextPage } from 'next';

import MemberLayout from 'layouts/member';
import TransactionsDetailContent from 'components/organisms/TransactionsDetailContent';

const MemberTransactionDetailPage: NextPage = () => (
  <MemberLayout id="transactions-detail">
    <TransactionsDetailContent />
  </MemberLayout>
);

export default MemberTransactionDetailPage;
