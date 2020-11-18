import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

const Loading = () => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open>
        <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;