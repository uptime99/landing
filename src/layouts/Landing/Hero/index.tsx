import React from 'react';

import EvenOddSection from '@src/components/EvenOddSection';

import Image from './Image';
import Slogan from './Slogan';

const Hero: React.FC = () => {
  return (
    <EvenOddSection id="hero">
      <Slogan />
      <Image />
    </EvenOddSection>
  );
};

export default Hero;
