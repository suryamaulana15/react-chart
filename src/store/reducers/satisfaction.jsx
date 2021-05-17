import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  satisfaction: [],
  error: {},
  loading: false,
}

const fetchSatisfactionsStart = (state, action) => {
  return updateObject(state, {
    loading: true
  })
};

const fetchSatisfactionsSuccess = (state, action) => {
  return updateObject(state, {
    satisfaction: action.satisfaction,
    loading: false
  });
};

const fetchSatisfactionsFalse = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SATISFACTIONS_CHART_START:
      return fetchSatisfactionsStart(state, action);
    case actionTypes.FETCH_SATISFACTIONS_CHART_SUCCESS:
      return fetchSatisfactionsSuccess(state, action);
    case actionTypes.FETCH_SATISFACTIONS_CHART_FAIL:
      return fetchSatisfactionsFalse(state, action);
    default: return state;
  }
}

export default reducer;