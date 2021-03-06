import type { NextPage } from 'next';

import Brand from 'components/atoms/Brand';
import CheckoutHeader from 'components/organisms/CheckoutHeader';
import CheckoutDetail from 'components/organisms/CheckoutDetail';
import CheckoutConfirmation from 'components/organisms/CheckoutConfirmation';

const CheckoutPage: NextPage = () => (
  <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
    <div className="container-fluid">
      <div className="logo text-md-center text-start pb-50">
        <Brand />
      </div>
      <div className="title-text pt-md-50 pt-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
        <p className="text-lg color-palette-1 mb-0">
          Waktunya meningkatkan cara bermain
        </p>
      </div>
      <CheckoutHeader />
      <hr />
      <CheckoutDetail />
      <CheckoutConfirmation />
    </div>
  </section>
);

export default CheckoutPage;
