import React from 'react';
import { Typography } from '@material-ui/core';

import { useRouter } from 'next/router';

const Slogan: React.FC = () => {
  const { locale } = useRouter();

  switch (locale) {
    case 'fa':
      return (
        <Typography component="h2" variant="h3" align="center" color="inherit">
          با نسخه حرفه‌ای{' '}
          <Typography variant="inherit" color="secondary">
            ۵ برابر
          </Typography>{' '}
          سریعتر آگاه شوید
          <Typography variant="inherit" color="secondary">
            .
          </Typography>
        </Typography>
      );
    case 'en':
    default:
      return (
        <Typography component="h2" variant="h3" align="center" color="inherit">
          Get notified{' '}
          <Typography variant="inherit" color="secondary">
            5x faster
          </Typography>{' '}
          with the PRO plan
          <Typography variant="inherit" color="secondary">
            .
          </Typography>
        </Typography>
      );
  }
};

export default Slogan;
