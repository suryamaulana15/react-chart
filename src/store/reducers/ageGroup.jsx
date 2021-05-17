import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  ageGroup: [],
  error: {},
  loading: false,
}

const fetchAgeGroupStart = (state, action) => {
  return updateObject(state, {
    loading: true
  })
};

const fetchAgeGroupSuccess = (state, action) => {
  return updateObject(state, {
    ageGroup: action.ageGroup,
    loading: false
  });
};

const fetchAgeGroupFalse = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AGE_GROUPS_CHART_START:
      return fetchAgeGroupStart(state, action);
    case actionTypes.FETCH_AGE_GROUPS_CHART_SUCCESS:
      return fetchAgeGroupSuccess(state, action);
    case actionTypes.FETCH_AGE_GROUPS_CHART_FAIL:
      return fetchAgeGroupFalse(state, action);
    default: return state;
  }
}

export default reducer;