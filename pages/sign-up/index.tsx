import type { NextPage } from 'next';

import Brand from 'components/atoms/Brand';
import SignUpForm from 'components/organisms/SignUpForm';

const SignUpPage: NextPage = () => (
  <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
    <div className="container mx-auto">
      <form action="">
        <div className="pb-50">
          <Brand />
        </div>
        <SignUpForm />
      </form>
    </div>
  </section>
);

export default SignUpPage;
