import { SnackbarOrigin } from 'notistack';

import nextI18NextConfig from '../../next-i18next.config';

export const title = 'Uptime99';
export const defaultLocale = nextI18NextConfig.i18n.defaultLocale;

export const __DEV___ = process.env.NODE_ENV === 'development';
export const __NODE___ = typeof window === 'undefined';

export const snackbarAnchorOrigin: SnackbarOrigin = {
  vertical: 'bottom',
  horizontal: 'left',
};
