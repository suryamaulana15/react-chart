import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  dailyVisitor: [],
  error: {},
  loading: false,
}

const fetchDailyVisitorsStart = (state, action) => {
  return updateObject(state, {
    loading: true
  })
};

const fetchDailyVisitorsSuccess = (state, action) => {
  return updateObject(state, {
    dailyVisitor: action.dailyVisitor,
    loading: false
  });
};

const fetchDailyVisitorsFalse = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DAILY_VISITORS_CHART_START:
      return fetchDailyVisitorsStart(state, action);
    case actionTypes.FETCH_DAILY_VISITORS_CHART_SUCCESS:
      return fetchDailyVisitorsSuccess(state, action);
    case actionTypes.FETCH_DAILY_VISITORS_CHART_FAIL:
      return fetchDailyVisitorsFalse(state, action);
    default: return state;
  }
}

export default reducer;