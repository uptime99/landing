import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  title: string;
};

const useStyles = makeStyles((theme) => ({
  header: {
    minHeight: 300,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(4),
  },
}));

const Header: React.FC<Props> = ({ title }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.header} position="static" elevation={0}>
      <Typography component="h1" variant="h4">
        {title}
      </Typography>
    </AppBar>
  );
};

export default React.memo(Header);
