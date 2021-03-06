import React from 'react';
import { Hidden } from '@material-ui/core';

import EvenOddSection from '@src/components/EvenOddSection';

import Image from './Image';
import Slogan from './Slogan';

const Hero: React.FC = () => {
  return (
    <EvenOddSection id="hero">
      <Slogan />
      <Hidden smDown>
        <Image />
      </Hidden>
    </EvenOddSection>
  );
};

export default Hero;
