import React from 'react';

import { GetStaticProps, NextPage } from 'next';
// import { useTranslation } from 'next-i18next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { defaultLocale } from '@src/configuration';
import Layout from '@src/layouts/Landing';

type Props = SSRConfig;

const Page: NextPage<Props> = () => {
  // const { t } = useTranslation();

  return (
    <Layout>
      <div />
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
