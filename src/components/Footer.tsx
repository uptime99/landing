import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useTranslation } from 'next-i18next';

type Props = {};

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

const Header: React.FC<Props> = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Container className={classes.footer} component="footer" maxWidth="lg">
      <Typography>
        {t('Powered by')} <Link href="https://uptime99.net">Uptime99</Link>
      </Typography>
    </Container>
  );
};

export default React.memo(Header);
