import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useTranslation } from 'next-i18next';

import EvenOddSection from '@src/components/EvenOddSection';

import PriceCard from './PriceCard';
import Slogan from './Slogan';

const useStyles = makeStyles(() => ({
  container: {
    flexDirection: 'column',
  },
}));

const Pricing: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <EvenOddSection id="pricing" className={classes.container}>
      <Box mb={10}>
        <Slogan />
      </Box>
      <Grid container spacing={1} alignItems="baseline">
        <Grid item md={4} xs={6}>
          <PriceCard
            title={
              <Typography component="h3" variant="h4" color="inherit">
                {t('Free plan')}
                <Typography color="secondary" component="span" variant="h4">
                  .
                </Typography>
              </Typography>
            }
            description={[
              t('No SMS or voice call alerts'),
              t('1 Status page'),
              t('HTTP(S) monitoring (w/o SSL errors)'),
              t('Response time monitoring'),
              t('Ping monitoring'),
              t('Port monitoring'),
              t('Keyword monitoring'),
              t('Mobile app (Android & iOS)'),
              t('3 months log retention'),
            ]}
            price={t('0')}
            subheader={t('No credit card required!')}
            buttonText={t('Register for FREE')}
            buttonVariant="outlined"
          />
        </Grid>
        <Grid item md={4} xs={6}>
          <PriceCard
            title={
              <Typography component="h3" variant="h4" color="inherit">
                <Typography color="secondary" component="span" variant="h4">
                  {t('PRO')}
                </Typography>{' '}
                {t('plan')}
                <Typography color="secondary" component="span" variant="h4">
                  .
                </Typography>
              </Typography>
            }
            description={[
              t('All features from FREE plan'),
              t('SSL cert. expiry & errors'),
              t('Background job monitoring'),
              t('Advanced notification options'),
              t('Unlimited no. of Status pages'),
              t('Status page subscription'),
              t('White-labeled Status pages'),
              t('Set password for Status page'),
              t('Maintenance windows'),
              t('Custom HTTP header & status'),
              t('Import monitors in bulk'),
            ]}
            price={t('0')}
            subheader={t('No credit card required!')}
            buttonText={t('Subscribe now')}
            buttonVariant="contained"
          />
        </Grid>
        <Grid item md={4} xs={6}>
          <PriceCard
            title={
              <Typography component="h3" variant="h4" color="inherit">
                {t('Startup plan')}
                <Typography color="secondary" component="span" variant="h4">
                  .
                </Typography>
              </Typography>
            }
            description={[
              t('No SMS or voice call alerts'),
              t('1 Status page'),
              t('HTTP(S) monitoring (w/o SSL errors)'),
              t('Response time monitoring'),
              t('Ping monitoring'),
              t('Port monitoring'),
              t('Keyword monitoring'),
              t('Mobile app (Android & iOS)'),
              t('3 months log retention'),
            ]}
            price={t('0')}
            subheader={t('No credit card required!')}
            buttonText={t('Subscribe now')}
            buttonVariant="outlined"
          />
        </Grid>
      </Grid>
    </EvenOddSection>
  );
};

export default Pricing;
