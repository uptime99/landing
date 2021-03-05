import React from 'react';
import { Typography } from '@material-ui/core';

import { useRouter } from 'next/router';

const Slogan: React.FC = () => {
  const { locale } = useRouter();

  switch (locale) {
    case 'fa':
      return (
        <Typography component="h1" variant="h2" align="center">
          اولین سرویس{' '}
          <Typography variant="inherit" color="secondary">
            آپتایم مانیتورینگ
          </Typography>{' '}
          ایرانی
          <Typography variant="inherit" color="secondary">
            .
          </Typography>
        </Typography>
      );
    case 'en':
    default:
      return (
        <Typography component="h1" variant="h1" align="center">
          Another{' '}
          <Typography variant="inherit" color="secondary">
            uptime monitoring
          </Typography>{' '}
          service
          <Typography variant="inherit" color="secondary">
            .
          </Typography>
        </Typography>
      );
  }
};

export default Slogan;
