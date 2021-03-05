import React from 'react';
import * as Sentry from '@sentry/react';
import NProgress from 'nprogress';

import { appWithTranslation } from 'next-i18next';
import { PageTransition } from 'next-page-transitions';
import { AppProps } from 'next/app';
import Router from 'next/router';

import { __DEV___, __NODE___ } from '@src/configuration';
import Theme from '@src/theme';

import '@src/theme/fonts.css';

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  if (__NODE___) {
    Sentry.init({
      enabled: !__DEV___,
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    });
  } else {
    Sentry.init({
      enabled: !__DEV___,
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    });
  }
}

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App: React.FC<AppProps & { err: any }> = ({
  Component,
  pageProps,
  router,
  err,
}) => {
  return (
    <Theme>
      <PageTransition
        timeout={200}
        classNames="page-transition"
        key={router.route}
      >
        <Component {...pageProps} key={router.route} err={err} />
      </PageTransition>
    </Theme>
  );
};

export default appWithTranslation(App);
