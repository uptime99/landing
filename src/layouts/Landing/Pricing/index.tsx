import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import EvenOddSection from '@src/components/EvenOddSection';

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
    <EvenOddSection id="pricing">
      <Container className={classes.container} maxWidth="md">
        <Slogan />
      </Container>
    </EvenOddSection>
  );
};

export default Hero;
