import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Hidden } from '@material-ui/core';

import Footer from './components/Footer';
import AppBar from './components/NavBar/AppBar/AppBar';

import Aux from '../../Aux/Aux';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    paddingTop: 56,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
      paddingTop: 56,
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  contentPadding: {
    padding: '32px 32px 0px',
  }
}))

const Main = props => {
  const classes = useStyles()

  return (
    <Aux>
      <div
        className={clsx({
          [classes.root]: true,
        })}
      >
        <AppBar />
        <main
          className={classes.content}
        >
          <div className={classes.contentPadding}>
            {props.children}
          </div>
          <Hidden only={['xs', 'sm']}>
            <Footer />
          </Hidden>
        </main>

      </div>

    </Aux>
  )
}

export default Main
