import '../styles/homepage.css';
import '../styles/utilities.css';
import 'aos/dist/aos.css';

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
