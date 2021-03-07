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
          همه‌ی آنچه برایتان مهم است در یک جا{' '}
          <Typography variant="inherit" color="secondary">
            مانیتور
          </Typography>{' '}
          می‌شود
          <Typography variant="inherit" color="secondary">
            .
          </Typography>
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
          All you really care about{' '}
          <Typography variant="inherit" color="secondary">
            monitored
          </Typography>{' '}
          at one place
          <Typography variant="inherit" color="secondary">
            .
          </Typography>
        </Typography>
      );
  }
};

export default Slogan;
