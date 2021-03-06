import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useTranslation } from 'next-i18next';

type Props = {};

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  container: {
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
    <footer className={classes.footer}>
      <Container className={classes.container} maxWidth="lg">
        <Typography color="inherit">
          {t('Powered by')} <Link href="https://uptime99.net">Uptime99</Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default React.memo(Header);
