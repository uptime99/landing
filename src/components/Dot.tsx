import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

type Props = {
  component?: React.ElementType;
  type?: 'warning' | 'success';
  big?: boolean;
};

const useStyles = makeStyles<Theme, Props>((theme) => ({
  '@keyframes pulse': {
    '0%': { opacity: 0.5 },
    '70%': { opacity: 0, transform: 'scale(2.5)' },
    '100%': { opacity: 0 },
  },
  '@keyframes pulseBig': {
    '0%': { opacity: 0.5 },
    '70%': { opacity: 0, transform: 'scale(1.6)' },
    '100%': { opacity: 0 },
  },
  dot: {
    margin: theme.spacing(0, 1),
    display: 'inline-block',
    position: 'relative',
    color: ({ type = 'success' }) => theme.palette[type].main,
    background: ({ type = 'success' }) => theme.palette[type].main,
    width: 12,
    height: 12,
    borderRadius: '50%',
    transform: 'none',
    '&:after': {
      content: "''",
      opacity: 1,
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      borderRadius: '50%',
      background: 'currentColor',
      animation: '$pulse 2s infinite',
    },
  },
  bigDot: {
    width: 60,
    height: 60,
    '&:after': {
      animation: '$pulseBig 2s infinite',
    },
  },
}));

const Dot: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  const { component = 'span', type } = props;
  return React.createElement(component, {
    className: clsx(classes.dot, props.big && classes.bigDot),
    type,
  });
};

export default React.memo(Dot);
