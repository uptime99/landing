import { common } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const base: any = {
  palette: {
    type: 'light',
    primary: {
      main: '#131a26',
      contrastText: common.white,
    },
    background: {
      default: '#f5f5f5',
    },
  },
  direction: 'ltr',
};

export const english = responsiveFontSizes(createMuiTheme(base));

export const farsi = createMuiTheme({
  ...base,
  direction: 'rtl',
  typography: {
    fontFamily: 'IRANSans, sans-serif',
  },
});
