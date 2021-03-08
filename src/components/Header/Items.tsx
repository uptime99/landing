import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  onClick?: () => void;
};

const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(0, 1, 0, 1),
    '& > *': {
      justifyContent: 'center',
      width: 'unset',
      borderRadius: theme.shape.borderRadius,
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: 0,
      '& > *': {
        justifyContent: 'center',
        borderRadius: 0,
        width: '100%',
      },
    },
  },
}));

const Items: React.FC<Props> = ({ onClick }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { locale } = useRouter();

  return (
    <List disablePadding className={classes.list}>
      <Link href="/#features" passHref locale={locale}>
        <ListItem button color="inherit" component="a" onClick={onClick}>
          {t('Features')}
        </ListItem>
      </Link>
      <Link href="/#integrations" passHref locale={locale}>
        <ListItem button color="inherit" component="a" onClick={onClick}>
          {t('Integration')}
        </ListItem>
      </Link>
      <Link href="/#status" passHref locale={locale}>
        <ListItem button color="inherit" component="a" onClick={onClick}>
          {t('Status Page')}
        </ListItem>
      </Link>
      <Link href="/#pricing" passHref locale={locale}>
        <ListItem button color="inherit" component="a" onClick={onClick}>
          {t('Pricing')}
        </ListItem>
      </Link>
    </List>
  );
};

export default Items;
