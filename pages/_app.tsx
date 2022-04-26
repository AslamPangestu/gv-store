import 'aos/dist/aos.css';
import 'styles/homepage.css';
import 'styles/utilities.css';
import 'styles/detail.css';
import 'styles/checkout.css';
import 'styles/complete-checkout.css';
import 'styles/sign-in.css';
import 'styles/sign-up.css';
import 'styles/sign-up-photo.css';
import 'styles/sign-up-success.css';
import 'styles/404-not-found.css';
import 'styles/overview.css';
import 'styles/sidebar.css';
import 'styles/transactions.css';

import { useEffect } from 'react';
import AOS from 'aos';
import type { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* Bootstrap JS */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossOrigin="anonymous"
      />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
