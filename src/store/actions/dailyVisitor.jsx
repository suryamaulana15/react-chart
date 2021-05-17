import * as actionTypes from './actionTypes';
import firebase from '../../firebase';
import moment from "moment";

const db = firebase.collection("/dailyVisitor");

export const fetchDailyVisitorsStart = () => {
  return {
    type: actionTypes.FETCH_DAILY_VISITORS_CHART_START
  };
};

export const fetchDailyVisitorsSuccess = (target, actual,x) => {
  return {
    type: actionTypes.FETCH_DAILY_VISITORS_CHART_SUCCESS,
    dailyVisitor: [
      x,
      target,
      actual
    ],
    axisX: x.slice(1)
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
      const fetchedX = ['x'];
      snapShot.forEach((doc) => {
        fetchedTarget.push(
          doc.data().target
        );
        fetchedActual.push(
          doc.data().actual
        );
        fetchedX.push(
          moment.unix(doc.data().timestamp.seconds, 'seconds').utc().format('YYYY-MM-DD')
        );
      });
      dispatch(fetchDailyVisitorsSuccess(fetchedTarget, fetchedActual, fetchedX));
    },(error) => {
      dispatch(fetchDailyVisitorsFail(error));
    })
  }
}