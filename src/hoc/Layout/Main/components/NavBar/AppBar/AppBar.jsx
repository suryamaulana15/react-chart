import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'

import AppBar from '@material-ui/core/AppBar'
import ToolBarComponent from './ToolBar/ToolBarComponent'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: '#F8F8F8'
  }
}))

const Appbar = props => {

  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar)}
    >
      <ToolBarComponent/>
    </AppBar>
  )
}

export default Appbar;
