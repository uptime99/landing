import React from 'react';

import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import Chat from '@src/components/Chat';
import Head from '@src/components/Head';
import { defaultLocale } from '@src/configuration';
import Layout from '@src/layouts/Landing';

type Props = SSRConfig;

const Page: NextPage<Props> = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <>
      <Head
        title={`${t('Uptime99')} | ${t('Free Website Monitoring')}`}
        description={t('Uptime99 Description')}
        keywords="uptime, uptime monitor, uptime99"
        robots="index, follow"
      >
        <Chat locale={locale} />
      </Head>
      <Layout>
        <div />
      </Layout>
    </>
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
