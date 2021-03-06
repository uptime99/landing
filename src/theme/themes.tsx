import { common, green } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import { defaultFontFamily } from '@src/configuration';

export const base: any = {
  palette: {
    type: 'light',
    primary: {
      main: '#131a26',
      light: '#3a404e',
      dark: '#000000',
      contrastText: common.white,
    },
    secondary: {
      main: green.A700,
      light: '#5efc82',
      dark: '#009624',
      contrastText: common.black,
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: defaultFontFamily,
  },
  direction: 'ltr',
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          scrollBehavior: 'smooth',
        },
      },
    },
  },
};

export const english = responsiveFontSizes(createMuiTheme(base));

export const farsi = createMuiTheme({
  ...base,
  direction: 'rtl',
  typography: {
    fontFamily: 'IRANSans, sans-serif',
  },
});
