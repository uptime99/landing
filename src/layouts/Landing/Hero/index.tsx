import React from 'react';
import { Container, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import EvenOddSection from '@src/components/EvenOddSection';

import Image from './Image';
import Slogan from './Slogan';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

const Hero: React.FC = () => {
  const classes = useStyles();

  return (
    <EvenOddSection id="hero">
      <Container className={classes.container} maxWidth="md">
        <Slogan />
        <Hidden smDown>
          <Image />
        </Hidden>
      </Container>
    </EvenOddSection>
  );
};

export default Hero;
