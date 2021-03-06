import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Close as CloseIcon, Menu as MenuIcon } from '@material-ui/icons';

import { useTranslation } from 'next-i18next';

import { drawerWidth } from '@src/configuration';

import BackToTop from './BackToTop';
import Items from './Items';
import Logotype from './Logotype';

type Props = {};

const useStyles = makeStyles((theme) => ({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(0, 0.5),
    },
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  closeMenuButton: {
    margin: theme.spacing(1, 'auto', 0, 1),
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const Header: React.FC<Props> = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = React.useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  return (
    <>
      <div id="scroll-top" />
      <AppBar position="fixed" color="primary" elevation={trigger ? 4 : 0}>
        <Container maxWidth="md">
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Logotype />
            <nav className={classes.nav}>
              <Hidden smDown implementation="css">
                <Items />
              </Hidden>
              <Hidden mdUp implementation="css">
                <Drawer
                  variant="temporary"
                  anchor="left"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                    disableScrollLock: true,
                  }}
                >
                  <IconButton
                    onClick={handleDrawerToggle}
                    className={classes.closeMenuButton}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="row"
                    marginY={2}
                    onClick={handleDrawerToggle}
                  >
                    <Logotype />
                  </Box>
                  <Items onClick={handleDrawerToggle} />
                </Drawer>
              </Hidden>
            </nav>
            <Button variant="contained" color="secondary">
              {t('Login / Register')}
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <BackToTop />
    </>
  );
};

export default React.memo(Header);
