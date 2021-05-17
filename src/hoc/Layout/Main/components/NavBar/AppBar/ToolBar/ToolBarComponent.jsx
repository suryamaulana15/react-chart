import { Toolbar } from '@material-ui/core'
import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  fontLogo: {
    fontWeight: "bold",
    fontSize: "larger"
  },
}))

const ToolBarComponent = props => {

  const classes = useStyles()

  return (
    <Fragment>
      <Toolbar>
        <div className={classes.fontLogo}>
          <img src={require('../../../../../../../assets/images/logo/logo_web.png').default} alt="logo" width="150px" height="auto"/>
          {/*Toko Surya Makmur*/}
        </div>

      </Toolbar>
    </Fragment>
  )
}

export default (ToolBarComponent)
