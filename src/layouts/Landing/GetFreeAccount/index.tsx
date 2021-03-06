import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useTranslation } from 'next-i18next';

import EvenOddSection from '@src/components/EvenOddSection';
import { dashboardBaseURL } from '@src/configuration';

import Slogan from './Slogan';

const useStyles = makeStyles(() => ({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const GetFreeAccount: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <EvenOddSection className={classes.container}>
      <Slogan />
      <Box mb={2}>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          href={`${dashboardBaseURL}/register`}
        >
          {t('Start monitoring in 30 seconds')}
        </Button>
      </Box>
      <Typography color="textSecondary">
        {t('No credit card required!')}
      </Typography>
    </EvenOddSection>
  );
};

export default GetFreeAccount;
