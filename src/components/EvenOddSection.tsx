import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type Props = React.ComponentProps<typeof Box>;

const useStyles = makeStyles((theme) => ({
  section: {
    display: 'flex',
    height: '100vh',
    color: theme.palette.primary.contrastText,
    alignItems: 'center',
    '&:nth-child(odd)': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:nth-child(even)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}));

const EvenOddSection: React.FC<Props> = ({
  component = 'section',
  ...rest
}) => {
  const classes = useStyles();

  return <Box className={classes.section} component={component} {...rest} />;
};

export default React.memo(EvenOddSection);
