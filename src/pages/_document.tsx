import React from 'react';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles';

import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { __DEV___ } from '@src/configuration';

let prefixer: any;
let cleanCSS: any;
if (!__DEV___) {
  const postcss = require('postcss');
  const autoprefixer = require('autoprefixer');
  const CleanCSS = require('clean-css');
  prefixer = postcss([autoprefixer]);
  cleanCSS = new CleanCSS();
}

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          materialUiSheets.collect(<App {...props} />),
      });
    const initialProps = await NextDocument.getInitialProps(ctx);

    let css = materialUiSheets.toString();
    // It might be undefined, e.g. after an error.
    if (css && !__DEV___) {
      const result1 = await prefixer.process(css, { from: undefined });
      css = result1.css;
      css = cleanCSS.minify(css).styles;
    }

    return {
      ...initialProps,
      styles: [
        <style
          id="jss-server-side"
          key="jss-server-side"
          dangerouslySetInnerHTML={{ __html: css }}
        />,
        <noscript key="jss-insertion-point" id="jss-insertion-point" />,
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
