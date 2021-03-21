import React from 'react';
import {
  Box,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import { darken, makeStyles } from '@material-ui/core/styles';
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  Telegram as TelegramIcon,
  Twitter as TwitterIcon,
} from '@material-ui/icons';

import { useTranslation } from 'next-i18next';

import Logotype from '@src/components/Logotype';

import * as Images from './Images';

type Props = {};

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  container: {
    padding: theme.spacing(4),
  },
  icon: {
    color: darken(theme.palette.primary.contrastText, 0.2),
  },
}));

const Footer: React.FC<Props> = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <Container className={classes.container} maxWidth="md">
        <Grid container spacing={3}>
          <Grid item md={3} xs={12}>
            <Logotype />
            <Box display="flex" flexDirection="row">
              <IconButton
                className={classes.icon}
                href="mailto:contact@uptime99.net"
                target="_blank"
              >
                <EmailIcon />
              </IconButton>
              <IconButton
                className={classes.icon}
                href="https://t.me/uptime99"
                target="_blank"
              >
                <TelegramIcon />
              </IconButton>
              <IconButton
                className={classes.icon}
                href="https://twitter.com/uptime99net"
                target="_blank"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                className={classes.icon}
                href="https://www.instagram.com/uptime99net/"
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                className={classes.icon}
                href="https://github.com/uptime99"
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography color="inherit" component="h3" variant="h6">
              {t('Monitoring')}
              <Typography color="secondary" component="span">
                .
              </Typography>
            </Typography>
            <List>
              <ListItem component="a">{t('Integrations')}</ListItem>
              <ListItem component="a">{t('API')}</ListItem>
              <ListItem component="a">{t('FAQs')}</ListItem>
              <ListItem component="a">{t('Help center')}</ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography color="inherit" component="h3" variant="h6">
              {t('Company')}
              <Typography color="secondary" component="span">
                .
              </Typography>
            </Typography>
            <List>
              <ListItem component="a">{t('Pricing')}</ListItem>
              <ListItem component="a">{t('Blog')}</ListItem>
              <ListItem component="a">{t('Terms / Privacy')}</ListItem>
              <ListItem component="a">{t('Contact us')}</ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography
              color="inherit"
              component="h3"
              variant="h6"
              gutterBottom
            >
              {t('Download the mobile app')}.
            </Typography>

            <Box display="flex" flexDirection="row">
              <Box m={1}>
                <Images.GooglePlay />
              </Box>
              <Box m={1}>
                <Images.AppStore />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default React.memo(Footer);
