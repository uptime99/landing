import React from 'react';

import Footer from '@src/components/Footer';
import Header from '@src/components/Header';

import Features from './Features';
import Hero from './Hero';
import Integrations from './Integrations';
import Pricing from './Pricing';
import StatusPages from './StatusPages';

type Props = {};

const Base: React.FC<Props> = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <StatusPages />
        <Pricing />
      </main>
      <Footer />
    </>
  );
};

export default Base;
