import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  children: NonNullable<React.ReactNode>;
};

const useStyles = makeStyles((theme) => ({
  section: {
    display: 'flex',
    margin: theme.spacing(1, 0, 1, 0),
    padding: theme.spacing(1),
    width: '100%',
    height: theme.spacing(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Section: React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.section} component="section">
      {children}
    </Card>
  );
};

export default React.memo(Section);
