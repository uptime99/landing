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
          variant="h4"
          align="center"
          color="inherit"
          gutterBottom
        >
          هر وب سایتی امکان دان شدن در هر لحظه را دارد
          <Typography variant="inherit" color="secondary">
            .
          </Typography>
          <br />
          ولی مهم اینکه شما{' '}
          <Typography variant="inherit" color="secondary">
            سریع مطلع بشید!
          </Typography>
        </Typography>
      );
    case 'en':
    default:
      return (
        <Typography
          component="h2"
          variant="h4"
          align="center"
          color="inherit"
          gutterBottom
        >
          Downtime happens
          <Typography variant="inherit" color="secondary">
            .
          </Typography>
          <br />
          <Typography variant="inherit" color="secondary">
            Get notified!
          </Typography>
        </Typography>
      );
  }
};

export default Slogan;
