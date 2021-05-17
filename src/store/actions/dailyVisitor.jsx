import * as actionTypes from './actionTypes';
import firebase from '../../firebase';

const db = firebase.collection("/dailyVisitor");

export const fetchDailyVisitorsStart = () => {
  return {
    type: actionTypes.FETCH_DAILY_VISITORS_CHART_START
  };
};

export const fetchDailyVisitorsSuccess = (target, actual) => {
  return {
    type: actionTypes.FETCH_DAILY_VISITORS_CHART_SUCCESS,
    dailyVisitor: [
      target,
      actual
    ]
  };
};

export const fetchDailyVisitorsFail = error => {
  return {
    type: actionTypes.FETCH_SATISFACTIONS_CHART_FAIL,
    error: error
  };
};

export const fetchDailyVisitors = () => {
  return dispatch => {
    dispatch(fetchDailyVisitorsStart());
    db.orderBy("timestamp", "asc")
      .onSnapshot((snapShot) => {
      const fetchedTarget = ['target'];
      const fetchedActual = ['actual'];
      snapShot.forEach((doc) => {
        fetchedTarget.push(
          doc.data().target
        );
        fetchedActual.push(
          doc.data().actual
        );
      });
      dispatch(fetchDailyVisitorsSuccess(fetchedTarget, fetchedActual));
    },(error) => {
      dispatch(fetchDailyVisitorsFail(error));
    })
  }
}