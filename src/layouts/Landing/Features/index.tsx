import React from 'react';

import EvenOddSection from '@src/components/EvenOddSection';

import Slogan from './Slogan';

const Hero: React.FC = () => {
  return (
    <EvenOddSection id="features">
      <Slogan />
    </EvenOddSection>
  );
};

export default Hero;
