import React from 'react';
import { useTheme } from '@material-ui/core';

import { useTranslation } from 'next-i18next';
import NextHead from 'next/head';
import { useRouter } from 'next/router';

import { defaultCanonicalURL, defaultLocale } from '@src/configuration';

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  ogImage?: string;
  ogImageSecureURL?: string;
  twitterImage?: string;
  ogType?: string;
  canonicalURL?: string;
  robots?: string;
  children?: React.ReactNode;
  schemas?: object[];
};

const Head: React.FC<Props> = ({
  title,
  description,
  url,
  children,
  ogImage,
  ogImageSecureURL,
  twitterImage,
  ogType,
  canonicalURL,
  robots,
  schemas,
  keywords,
}) => {
  const theme = useTheme();
  const router = useRouter();
  const translation = useTranslation();
  const finalCanonicalURL = canonicalURL
    ? canonicalURL
    : `${defaultCanonicalURL}${router.asPath}`;
  const finalURL = url ? url : finalCanonicalURL;

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <meta name="theme-color" content={theme.palette.primary.main} />
      <link rel="canonical" href={finalCanonicalURL} />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/api/manifest.json" />
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color={theme.palette.primary.main}
      />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="msapplication-TileColor" color={theme.palette.primary.main} />
      <meta property="og:locale" content={router.locale ?? defaultLocale} />
      {ogType && <meta property="og:type" content={ogType} />}
      <meta property="og:site_name" content={translation.t('Uptime99')} />
      <meta property="og:url" content={finalURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImageSecureURL && (
        <meta property="og:image:secure_url" content={ogImageSecureURL} />
      )}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content="@uptime99net" />
      <meta name="twitter:creator" content="@uptime99net" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      {robots && (
        <>
          <meta name="robots" content={robots} />
          <meta name="googlebot" content={robots} />
        </>
      )}
      {children}
      {schemas &&
        schemas.map((schema, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "5cc45a88f3fd4270b085f138e39d03d8", "spa": true}'
      />
    </NextHead>
  );
};

export default Head;
