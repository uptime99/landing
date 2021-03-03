import { SnackbarOrigin } from 'notistack';

import getConfig from 'next/config';

import nextI18NextConfig from '../../next-i18next.config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export const title = 'Uptime99';
export const defaultLocale = nextI18NextConfig.i18n.defaultLocale;

export const __DEV___ = process.env.NODE_ENV === 'development';
export const __NODE___ = typeof window === 'undefined';

export const browserBaseURL = publicRuntimeConfig.browserBaseURL;
export const serverBaseURL = serverRuntimeConfig.serverBaseURL;

export const snackbarAnchorOrigin: SnackbarOrigin = {
  vertical: 'bottom',
  horizontal: 'left',
};
