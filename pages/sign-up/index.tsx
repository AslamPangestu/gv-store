import type { NextPage } from 'next';

import Brand from 'components/atoms/Brand';
import SignUpform from 'components/organisms/SignUpform';

const SignUpPage: NextPage = () => (
  <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
    <div className="container mx-auto">
      <form action="">
        <div className="pb-50">
          <Brand />
        </div>
        <SignUpform />
      </form>
    </div>
  </section>
);

export default SignUpPage;
