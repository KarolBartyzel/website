// `pages/_app.js`
import React from 'react';
import '../styles/global.css';
import type { AppProps } from 'next/app';
import { Layout } from '../src/components';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
