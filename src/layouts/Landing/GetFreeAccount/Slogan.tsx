import React from 'react';
import { Typography } from '@material-ui/core';

import { useRouter } from 'next/router';

const Slogan: React.FC = () => {
  const { locale } = useRouter();

  switch (locale) {
    case 'fa':
      return (
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="primary"
          gutterBottom
        >
          هم اکنون{' '}
          <Typography variant="inherit" color="secondary">
            حساب رایگان
          </Typography>{' '}
          خود را با ۵۰ مانیتور بسازید!
        </Typography>
      );
    case 'en':
    default:
      return (
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="primary"
          gutterBottom
        >
          Get your{' '}
          <Typography variant="inherit" color="secondary">
            FREE account
          </Typography>{' '}
          now, 50 monitors included!
        </Typography>
      );
  }
};

export default Slogan;
