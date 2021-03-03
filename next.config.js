// Use the hidden-source-map option when you don't want the source maps to be
// publicly available on the servers, only to the error reporting
const withSourceMaps = require('@zeit/next-source-maps')();

// Use the SentryWebpack plugin to upload the source maps during build step
const SentryWebpackPlugin = require('@sentry/webpack-plugin');

const withImages = require('next-images');
const withTM = require('next-transpile-modules');
const withPlugins = require('next-compose-plugins');
// const withPWA = require('next-pwa');

const { i18n } = require('./next-i18next.config');

const nextBuildId = require('next-build-id');

const DeleteSourceMapWebpackPlugin = require('delete-sourcemap-webpack-plugin-stzhang');

const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  NODE_ENV,
  VERCEL_GITHUB_COMMIT_SHA,
  VERCEL_GITLAB_COMMIT_SHA,
  VERCEL_BITBUCKET_COMMIT_SHA,
} = process.env;

const COMMIT_SHA =
  VERCEL_GITHUB_COMMIT_SHA ||
  VERCEL_GITLAB_COMMIT_SHA ||
  VERCEL_BITBUCKET_COMMIT_SHA;

module.exports = withPlugins(
  [
    // [
    //   withPWA,
    //   {
    //     pwa: {
    //       dest: 'public',
    //       disable: NODE_ENV === 'development',
    //       register: NODE_ENV === 'production',
    //     },
    //   },
    // ],
    [withImages, { inlineImageLimit: false }],
    withTM(['@material-ui/core', '@material-ui/icons']),
    withSourceMaps,
  ],
  {
    generateBuildId: () => nextBuildId({ dir: __dirname }),
    images: {
      domains: ['uptime99.s3.ir-thr-at1.arvanstorage.com'],
    },
    webpack: (config, options) => {
      if (options.isServer) {
        config.resolve.alias['@sentry/react'] = '@sentry/node';
      }

      if (
        SENTRY_DSN &&
        SENTRY_ORG &&
        SENTRY_PROJECT &&
        SENTRY_AUTH_TOKEN &&
        COMMIT_SHA &&
        NODE_ENV === 'production'
      ) {
        config.plugins.push(
          new SentryWebpackPlugin({
            url: 'https://sentry.io/',
            include: '.next',
            ignore: ['node_modules'],
            urlPrefix: '~/_next',
            release: COMMIT_SHA,
          })
        );

        config.plugins.push(new DeleteSourceMapWebpackPlugin());
      }

      config.node = {
        fs: 'empty',
      };

      return config;
    },
    i18n,
    transpileModules: ['@material-ui/core', '@material-ui/icons'],
    poweredByHeader: false,
    generateEtags: false,
    trailingSlash: false,
    compress: false,
    productionBrowserSourceMaps: false,
  }
);
