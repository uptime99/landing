import React from 'react';
import { Container, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Image from './Image';
import Slogan from './Slogan';

const useStyles = makeStyles((theme) => ({
  section: {
    display: 'flex',
    height: 'calc(100vh - 64px)',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

const Hero: React.FC = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container className={classes.container} maxWidth="md">
        <Slogan />
        <Hidden smDown>
          <Image />
        </Hidden>
      </Container>
    </section>
  );
};

export default Hero;
