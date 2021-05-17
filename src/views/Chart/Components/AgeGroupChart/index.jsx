import React, {Fragment, useEffect} from 'react';
import C3Chart from 'react-c3js';
import * as actions from '../../../../store/actions';
import {connect} from "react-redux";
import {Loading} from '../../../../components/UI';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  contentPaddingBottom: {
    paddingBottom: theme.spacing(3)
  },
  nonTransform: {
    textDecoration: 'none'
  }
}))

const AgeGroupChart = props => {
  const classes = useStyles();
  const {onFetchAgeGroup, ageGroup, loading} = props;

  const colors = {
    primary: '#01a8fe',
    def: '#acb7bf',
    success: '#46be8a',
    danger: '#fb434a',
  }

  console.log(ageGroup)
  let bar = {
    data: {
      columns: ageGroup,
      type: 'bar',
    },
    bar: {
      width: {
        max: 20,
      },
    },
    color: {
      pattern: [colors.danger, colors.def, colors.primary],
    },
    grid: {
      y: {
        show: !0,
      },
      x: {
        show: !1,
      },
    },
  }

  useEffect(() => {
    onFetchAgeGroup();
  },[onFetchAgeGroup]);

  return (loading ? <Loading/> :
    <Fragment>
      <Grid container justify="space-around" className={classes.contentPaddingBottom}>
        <Grid item>
          <Typography variant={"h4"}>
            Age Group Chart
          </Typography>
        </Grid>
      </Grid>

      <C3Chart data={bar.data} color={bar.color} grid={bar.grid} bar={bar.bar} />
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    ageGroup: state.ageGroup.ageGroup,
    loading: state.ageGroup.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchAgeGroup: () => dispatch(actions.fetchAgeGroup())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgeGroupChart);