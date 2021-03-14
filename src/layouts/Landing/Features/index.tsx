import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useTranslation } from 'next-i18next';

import EvenOddSection from '@src/components/EvenOddSection';

import FeatureCard from './FeatureCard';
import * as Images from './Images';
import Slogan from './Slogan';

const useStyles = makeStyles({
  container: {
    flexDirection: 'column',
  },
});

const Features: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <EvenOddSection id="features" className={classes.container}>
      <Slogan />
      <Grid container spacing={4}>
        <Grid item md={6}>
          <FeatureCard
            title={t('Website monitoring')}
            description={t('Website monitoring description')}
            image={<Images.WebsiteMonitoring />}
          />
        </Grid>
        <Grid item md={6}>
          <FeatureCard
            title={t('SSL certificate monitoring')}
            description={t('SSL certificate monitoring description')}
            image={<Images.SSLMonitoring />}
          />
        </Grid>
        <Grid item md={6}>
          <FeatureCard
            title={t('Port & ping monitoring')}
            description={t('Port & ping monitoring description')}
            image={<Images.PortMonitoring />}
          />
        </Grid>
        <Grid item md={6}>
          <FeatureCard
            title={t('Heartbeat monitoring (Cron)')}
            description={t('Heartbeat monitoring (Cron) description')}
            image={<Images.CronJobMonitoring />}
          />
        </Grid>
      </Grid>
    </EvenOddSection>
  );
};

export default Features;
