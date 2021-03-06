import React, { MouseEventHandler } from 'react';
import { Fab, NoSsr, useScrollTrigger, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    zIndex: 1000,
  },
}));

const BackToTop: React.FC = () => {
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick: MouseEventHandler<HTMLButtonElement> = React.useCallback(
    (event) => {
      const anchor = (
        (event.target as HTMLDivElement).ownerDocument || document
      ).querySelector('#scroll-top');

      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },
    []
  );

  return (
    <NoSsr>
      <Zoom in={trigger}>
        <Fab
          className={classes.fab}
          onClick={handleClick}
          color="secondary"
          size="small"
          aria-label="Scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </NoSsr>
  );
};

export default React.memo(BackToTop);
