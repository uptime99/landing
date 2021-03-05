import React from 'react';

import Footer from '@src/components/Footer';
import Header from '@src/components/Header';

import Hero from './Hero';

type Props = {
  children: NonNullable<React.ReactNode>;
};

const Base: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Base;
