import React,{Fragment} from 'react';
import C3Chart from 'react-c3js'

const colors = {
  primary: '#01a8fe',
  def: '#acb7bf',
  success: '#46be8a',
  danger: '#fb434a',
}

const donut = {
  data: {
    columns: [
      ['primary', 30],
      ['Success', 120],
      ['Danger', 120],
    ],
    type: 'donut',
  },
  color: {
    pattern: [colors.primary, colors.success, colors.danger],
  },
  donut: {
    title: 'Connections',
  },
}

const SatificationChart = props => {
  return (
    <Fragment>
      <C3Chart data={donut.data} color={donut.color} donut={donut.donut} />
    </Fragment>
  );
};

export default SatificationChart;