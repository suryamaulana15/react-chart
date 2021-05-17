import React, {Fragment, useEffect} from 'react';
import C3Chart from 'react-c3js';
import * as actions from '../../../../store/actions';
import {connect} from "react-redux";
import {Loading} from '../../../../components/UI';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  contentPaddingBottom: {
    paddingBottom: theme.spacing(3)
  },
  nonTransform: {
    textDecoration: 'none'
  }
}))

const SatificationChart = props => {
  const classes = useStyles();
  const {loading, satisfaction, onFetchSatisfaction} = props;

  const colors = {
    primary: '#01a8fe',
    def: '#acb7bf',
    success: '#46be8a',
    danger: '#fb434a',
  }

  const donut = {
    data: {
      columns: satisfaction,
      type: 'donut',
    },
    color: {
      pattern: [colors.primary, colors.success, colors.danger],
    },
    donut: {
      title: 'Connections',
    },
  }

  useEffect(() => {
    onFetchSatisfaction()
  },[onFetchSatisfaction])

  return (loading? <Loading/> :
    <Fragment>
      <Grid container justify="space-around" className={classes.contentPaddingBottom}>
        <Grid item>
          <Typography variant={"h4"}>
            Satisfaction Chart
          </Typography>
        </Grid>
      </Grid>

      <C3Chart data={donut.data} color={donut.color} donut={donut.donut} />
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    satisfaction: state.satisfaction.satisfaction,
    loading: state.satisfaction.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchSatisfaction: () => dispatch(actions.fetchSatisfaction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SatificationChart);