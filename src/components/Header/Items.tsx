import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useTranslation } from 'next-i18next';

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

  return (
    <List disablePadding className={classes.list}>
      <ListItem
        button
        color="inherit"
        href="/#features"
        component="a"
        onClick={onClick}
      >
        {t('Features')}
      </ListItem>
      <ListItem
        button
        color="inherit"
        href="/#integrations"
        component="a"
        onClick={onClick}
      >
        {t('Integration')}
      </ListItem>
      <ListItem
        button
        color="inherit"
        href="/#status"
        component="a"
        onClick={onClick}
      >
        {t('Status Page')}
      </ListItem>
      <ListItem
        button
        color="inherit"
        href="/#pricing"
        component="a"
        onClick={onClick}
      >
        {t('Pricing')}
      </ListItem>
    </List>
  );
};

export default Items;
