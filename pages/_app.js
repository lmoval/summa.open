import Layout from '../comps/Layout';
import '../styles/globals.css';
import { useState } from 'react';
import Search from '../comps/Search';
import '../styles/ais.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp