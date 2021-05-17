import * as actionTypes from './actionTypes';
import firebase from '../../firebase';

const db = firebase.collection("/satisfaction");

export const fetchSatisfactionStart = () => {
  return {
    type: actionTypes.FETCH_SATISFACTIONS_CHART_START
  };
};

export const fetchSatisfactionSuccess = (satisfied, neutral, disappointed) => {
  return {
    type: actionTypes.FETCH_SATISFACTIONS_CHART_SUCCESS,
    satisfaction: [
      satisfied,
      neutral,
      disappointed
    ]
  };
};

export const fetchSatisfactionFail = error => {
  return {
    type: actionTypes.FETCH_SATISFACTIONS_CHART_FAIL,
    error: error
  };
};

export const fetchSatisfaction = () => {
  return dispatch => {
    dispatch(fetchSatisfactionStart());
    db.onSnapshot((snapShot) => {
        const fetchedSatisfied = ['satisfied'];
        const fetchedNeutral = ['neutral'];
        const fetchedDisappointed = ['disappointed'];
        snapShot.forEach((doc) => {
          fetchedSatisfied.push(
            doc.data().satisfied
          );
          fetchedNeutral.push(
            doc.data().neutral
          );
          fetchedDisappointed.push(
            doc.data().disappointed
          );
        });
        dispatch(fetchSatisfactionSuccess(fetchedSatisfied, fetchedNeutral, fetchedDisappointed));
      },(error) => {
        dispatch(fetchSatisfactionFail(error));
      })
  }
}