import type { NextPage } from 'next';

import Navbar from 'components/organisms/Navbar';
import MainBanner from 'components/organisms/MainBanner';
import TransactionStep from 'components/organisms/TransactionStep';
import FeatureGame from 'components/organisms/FeatureGame';
import Statistics from 'components/organisms/Statistics';
import Story from 'components/organisms/Story';
import Footer from 'components/organisms/Footer';

const MainPage: NextPage = () => (
  <>
    <Navbar />
    <MainBanner />
    <TransactionStep />
    <FeatureGame />
    <Statistics />
    <Story />
    <Footer />
  </>
);

export default MainPage;
