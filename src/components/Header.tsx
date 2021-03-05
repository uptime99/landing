import React from 'react';
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useTranslation } from 'next-i18next';

import { preventDefault } from '@src/utils';

type Props = {};

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    '& > *': {
      margin: theme.spacing(0, 0.5),
    },
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const Header: React.FC<Props> = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="md">
        <Toolbar className={classes.toolbar}>
          <div className={classes.row}>
            <Typography variant="h6">{t('Uptime99')}</Typography>
            <Button color="inherit" href="#" onClick={preventDefault}>
              {t('Features')}
            </Button>
            <Button color="inherit" href="#" onClick={preventDefault}>
              {t('Integration')}
            </Button>
            <Button color="inherit" href="#" onClick={preventDefault}>
              {t('Status Page')}
            </Button>
            <Button color="inherit" href="#" onClick={preventDefault}>
              {t('Pricing')}
            </Button>
          </div>
          <Button variant="contained" color="secondary">
            {t('Login / Register')}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default React.memo(Header);
