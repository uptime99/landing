import React from 'react';
import { Box, Typography } from '@material-ui/core';

import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Section from '@src/components/Section';
import { defaultLocale } from '@src/configuration';
import Layout from '@src/layouts/Base';

type Props = SSRConfig;

const Page: NextPage<Props> = () => {
  const { t } = useTranslation();

  return (
    <Layout title="Uptime99">
      <Box marginTop={-8} marginBottom={5}>
        <Section>Test</Section>
      </Box>
      <Typography variant="h5" component="h2">
        <Box fontWeight="fontWeightBold">{t('Services')}</Box>
      </Typography>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({
  locale = defaultLocale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default Page;
