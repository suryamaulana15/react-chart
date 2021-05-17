import React, {Fragment, useEffect} from 'react';
import C3Chart from 'react-c3js';
import * as actions from '../../../../store/actions';
import {connect} from "react-redux";
import {Loading} from '../../../../components/UI';
import {isEmpty} from "../../../../shared/utility";

const DailyVisitorChart = (props) => {
  const {onFetchDailyVisitor, dailyVisitor, loading,axisX} = props;
  let x = [];

  useEffect(() => {
    onFetchDailyVisitor();
  },[onFetchDailyVisitor]);

  const colors = {
    primary: '#01a8fe',
    def: '#acb7bf',
    success: '#46be8a',
    danger: '#fb434a',
  }

  if (!isEmpty(dailyVisitor)){
    x = axisX;
    console.log(x)
  }

  const spline = {
    data: {
      x: 'x',
      columns: dailyVisitor,
      type: 'spline',
    },
    color: {
      pattern: [colors.primary, colors.danger],
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          values: x
          // format: function (x) { return x.getDate(); }
          //format: '%Y' // format string is also available for timeseries data
        }
      },
      y: {
        max: 300,
        min: 0,
        tick: {
          outer: !1,
          count: 7,
          values: [0, 50, 100, 150, 200, 250, 300],
        },
      },
    },
    grid: {
      x: {
        show: !1,
      },
      y: {
        show: !0,
      },
    },
  }

  return (loading? <Loading/> :
    <Fragment>
      <C3Chart data={spline.data} color={spline.color} axis={spline.axis} grid={spline.grid} />
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    dailyVisitor: state.dailyVisitor.dailyVisitor,
    loading: state.dailyVisitor.loading,
    axisX: state.dailyVisitor.axisX
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchDailyVisitor: () => dispatch(actions.fetchDailyVisitors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyVisitorChart);
