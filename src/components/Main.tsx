import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  children: NonNullable<React.ReactNode>;
};

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: `calc(100vh - ${400 - theme.spacing(7)}px)`,
  },
}));

const Header: React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.main} component="main" maxWidth="md">
      {children}
    </Container>
  );
};

export default React.memo(Header);
