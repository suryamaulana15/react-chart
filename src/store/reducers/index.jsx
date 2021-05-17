import { combineReducers } from 'redux';
import alert from './alert';
import product from './product';
import ageGroup from './ageGroup';
import satisfaction from './satisfaction';

export default combineReducers({
  alert,
  product,
  ageGroup,
  satisfaction
});