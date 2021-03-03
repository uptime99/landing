import React from 'react';
import { CssBaseline } from '@material-ui/core';
import {
  StylesProvider as MuiStylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';

import { useRouter } from 'next/router';

import { defaultLocale } from '@src/configuration';

import { jssLTR, jssRTL } from './jss';
import * as themes from './themes';

const Theme: React.FC = ({ children }) => {
  const router = useRouter();
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  const locale = React.useMemo(() => router.locale ?? defaultLocale, [
    router.locale,
  ]);
  const jss = React.useMemo(() => (locale === 'fa' ? jssRTL : jssLTR), [
    locale,
  ]);
  const theme = React.useMemo(
    () => (locale === 'fa' ? themes.farsi : themes.english),
    [locale]
  );

  return (
    <MuiStylesProvider jss={jss}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div id="theme" dir={theme.direction}>
          {children}
        </div>
      </MuiThemeProvider>
    </MuiStylesProvider>
  );
};

export default Theme;
