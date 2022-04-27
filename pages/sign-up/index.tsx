import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import SignUpform from 'components/organisms/SignUpform';

const SignUpPage: NextPage = () => (
  <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
    <div className="container mx-auto">
      <form action="">
        <div className="pb-50">
          <Link href="/" passHref>
            <a className="navbar-brand" href="dummy">
              <Image src="/icon/logo.svg" width={60} height={60} />
            </a>
          </Link>
        </div>
        <SignUpform />
      </form>
    </div>
  </section>
);

export default SignUpPage;
