import React from 'react';
import { Grid } from '@material-ui/core';

import EvenOddSection from '@src/components/EvenOddSection';

import * as Images from './Images';
import Slogan from './Slogan';

const Integrations: React.FC = () => {
  return (
    <EvenOddSection id="integrations">
      <Grid container spacing={1} alignItems="center">
        <Grid item md={6}>
          <Slogan />
        </Grid>
        <Grid container item md={6} spacing={3} justify="center">
          <Grid item md={4} xs={6} container justify="center">
            <Images.Email />
          </Grid>
          <Grid item md={4} xs={6} container justify="center">
            <Images.SMS />
          </Grid>
          <Grid item md={4} xs={6} container justify="center">
            <Images.Voice />
          </Grid>
          <Grid item md={4} xs={6} container justify="center">
            <Images.Twitter />
          </Grid>
          <Grid item md={4} xs={6} container justify="center">
            <Images.Telegram />
          </Grid>
          <Grid item md={4} xs={6} container justify="center">
            <Images.Webhooks />
          </Grid>
        </Grid>
      </Grid>
    </EvenOddSection>
  );
};

export default Integrations;
