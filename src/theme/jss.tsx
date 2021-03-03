import { jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';

export const jssRTL = create({
  plugins: [...jssPreset().plugins, rtl()],
  // @ts-ignore
  insertionPoint: process.browser
    ? window.document.getElementById('jss-insertion-point')
    : null,
  id: { minify: true },
});

export const jssLTR = create({
  plugins: jssPreset().plugins,
  // @ts-ignore
  insertionPoint: process.browser
    ? window.document.getElementById('jss-insertion-point')
    : null,
  id: { minify: true },
});
