import React, {Fragment} from 'react';
import {AgeGroupChart, DailyVisitorChart, SatisfactionChart} from './Components';
import {Grid} from "@material-ui/core";

const Chart = props => {
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <DailyVisitorChart/>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <AgeGroupChart/>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <SatisfactionChart />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default Chart;