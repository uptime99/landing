import React from 'react';

import Footer from '@src/components/Footer';
import Header from '@src/components/Header';

import Features from './Features';
import Hero from './Hero';

type Props = {};

const Base: React.FC<Props> = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default Base;
