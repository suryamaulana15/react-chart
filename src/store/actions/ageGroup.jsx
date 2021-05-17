import * as actionTypes from './actionTypes';
import firebase from '../../firebase';

const db = firebase.collection("/ageGroup");

export const fetchAgeGroupStart = () => {
  return {
    type: actionTypes.FETCH_AGE_GROUPS_CHART_START
  };
};

export const fetchAgeGroupSuccess = (elder, adult, teenager) => {
  return {
    type: actionTypes.FETCH_AGE_GROUPS_CHART_SUCCESS,
    ageGroup: [
      elder,
      adult,
      teenager
    ]
  };
};

export const fetchAgeGroupFail = error => {
  return {
    type: actionTypes.FETCH_AGE_GROUPS_CHART_FAIL,
    error: error
  };
};

export const fetchAgeGroup = () => {
  return dispatch => {
    dispatch(fetchAgeGroupStart());
    db.orderBy("timestamps", "asc")
      .onSnapshot((snapShot) => {
        const fetchedElder = ['elder'];
        const fetchedAdult = ['adult'];
        const fetchedTeenager = ['teenager'];
        snapShot.forEach((doc) => {
          fetchedElder.push(
            doc.data().elder
          );
          fetchedAdult.push(
            doc.data().adult
          );
          fetchedTeenager.push(
            doc.data().teenager
          );
        });
        dispatch(fetchAgeGroupSuccess(fetchedElder, fetchedAdult, fetchedTeenager));
      },(error) => {
        dispatch(fetchAgeGroupFail(error));
      })
  }
}