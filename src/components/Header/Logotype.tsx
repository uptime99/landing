import React from 'react';
import { Link as Anchor, Typography } from '@material-ui/core';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Logotype: React.FC = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <Link href="/" passHref locale={locale}>
      <Anchor color="inherit" underline="none">
        <Typography variant="h6">{t('Uptime99')}</Typography>
      </Anchor>
    </Link>
  );
};

export default Logotype;
