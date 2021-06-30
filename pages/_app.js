import Layout from '../comps/Layout';
import '../styles/globals.css';
import { useState } from 'react';
import Search from '../comps/Search';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp