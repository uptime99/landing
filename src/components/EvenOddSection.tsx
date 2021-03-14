import React from 'react';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

type Props = React.ComponentProps<typeof Box>;

const useStyles = makeStyles((theme) => ({
  section: {
    display: 'flex',
    minHeight: '100vh',
    padding: theme.spacing(2, 0),
    color: theme.palette.primary.contrastText,
    alignItems: 'center',
    '&:nth-child(odd)': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:nth-child(even)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const EvenOddSection: React.FC<Props> = ({
  component = 'section',
  children,
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.section} component={component} {...rest}>
      <Container className={clsx(classes.container, className)} maxWidth="md">
        <>{children}</>
      </Container>
    </Box>
  );
};

export default React.memo(EvenOddSection);
