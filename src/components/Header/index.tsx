import React from 'react';
import {
  AppBar,
  Button,
  Container,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Close as CloseIcon, Menu as MenuIcon } from '@material-ui/icons';

import { useTranslation } from 'next-i18next';

import { drawerWidth } from '@src/configuration';

import Items from './Items';

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
  const theme = useTheme();
  const classes = useStyles();
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = React.useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  return (
    <AppBar position="static" elevation={0}>
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
          <Typography variant="h6">{t('Uptime99')}</Typography>
          <nav className={classes.nav}>
            <Hidden smDown implementation="css">
              <Items />
            </Hidden>
            <Hidden mdUp implementation="css">
              <Drawer
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                <IconButton
                  onClick={handleDrawerToggle}
                  className={classes.closeMenuButton}
                >
                  <CloseIcon />
                </IconButton>
                <Items />
              </Drawer>
            </Hidden>
          </nav>
          <Button variant="contained" color="secondary">
            {t('Login / Register')}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default React.memo(Header);
