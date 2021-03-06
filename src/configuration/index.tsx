import getConfig from 'next/config';

import nextI18NextConfig from '../../next-i18next.config';

const { publicRuntimeConfig } = getConfig();

export const title = 'Uptime99';
export const defaultCanonicalURL = 'https://uptime99.net';
export const defaultLocale = nextI18NextConfig.i18n.defaultLocale;
export const defaultFontFamily = 'Ubuntu, sans-serif';

export const drawerWidth = 300;

export const __DEV___ = process.env.NODE_ENV === 'development';
export const __NODE___ = typeof window === 'undefined';

export const dashboardBaseURL = publicRuntimeConfig.dashboardBaseURL;
